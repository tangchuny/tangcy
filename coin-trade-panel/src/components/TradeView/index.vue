<style>
.dark{
  background: #000000;
}
</style>

<template>
  <div id="trade-view">
  </div>
</template>

<script>
import { widget as TvWidget } from '../../../static/tradeview/charting_library/charting_library.min.js'
import socket from './datafeeds/socket.js'
import datafeeds from './datafeeds/datafees.js'
export default {
  data() {
    return {
      widget: null,
      socket: new socket(),
      datafeeds: new datafeeds(this),
      symbol: null,
      interval: null,
      cacheData: {},
      lastTime: null,
      getBarTimer: null,
      isLoading: true
    }
  },
  created() {
    this.socket.doOpen()
    this.socket.on('open', () => {
      this.socket.send({ cmd: 'req', args: [`candle.M5.btcusdt}`, 1440, parseInt(Date.now() / 1000)] })
    })
    this.socket.on('message', this.onMessage)
  },
  methods: {
    init(symbol = 'BTCUSDT', interval = 5) {
      if (!this.widget) {
        this.widget = new TvWidget({
          symbol: symbol,
          interval: interval,
          // fullscreen: true,
          container_id: 'trade-view',
          datafeed: this.datafeeds,
          library_path: '/static/tradeview/charting_library/',
          disabled_features: ["left_toolbar"],
          // enabled_features: ["move_logo_to_main_pane"],
          timezone: 'Asia/Shanghai',
          locale: 'zh',
          debug: false,
          locale          : "zh",
          width           : '1065px',
          // height          :'730px',
          autosize        : false,
          fullscreen      : false,     //全屏
       // timeframe       : config.supported_resolutions,
        disabled_features: [
            "use_localstorage_for_settings",
            "volume_force_overlay",
            "header_compare",
            //"header_symbol_search",
            //"header_resolutions",
            "header_interval_dialog_button",
            //"show_interval_dialog_on_key_press",
            "caption_buttons_text_if_possible",
            "header_undo_redo",
            "header_screenshot",
            // "header_chart_type",
            "display_market_stauts",
            "study_templates",
            "left_toolbar",
          //  "go_to_date",
            "items_favoriting",
            "header_indicators",
            // "header_fullscreen_button",
            "header_settings",
            "header_saveload",
            // "volume_force_overlay",
            // "create_volume_indicator_by_default",
            // "create_volume_indicator_by_default_once"
        ],
        enabled_features: [
            "dont_show_boolean_study_arguments",
            "move_logo_to_main_pane",
            "hide_last_na_study_output",
            "legend_context_menu"
        ],
        //drawings_access: { type: 'black', tools: [ { name: "Regression Trend" } , { name: "Trend Angle", grayed: true }] },//工具
        // //绘图覆盖
        overrides: {
            "paneProperties.background": "#131722",
            "paneProperties.vertGridProperties.color": "#363c4e",
            "paneProperties.horzGridProperties.color": "#363c4e",
            "symbolWatermarkProperties.transparency": 90,
            "scalesProperties.textColor" : "#AAA",
            "mainSeriesProperties.candleStyle.wickUpColor": '#336854',
            "mainSeriesProperties.candleStyle.wickDownColor": '#7f323f',
        },
        //https://zlq4863947.gitbooks.io/tradingview/book/Studies-Overrides.html
        //为新创建的指标设置默认样式和输入值
        studies_overrides: {
            // "volume.volume.color.0": "#00FFFF",
            // "volume.volume.color.1": "#0000FF",
            // "volume.volume.transparency": 70,
            // "volume.volume ma.color": "#FF0000",
            // "volume.volume ma.transparency": 30,
            // "volume.volume ma.linewidth": 5,
            // "volume.show ma": true,
            "bollinger bands.median.color": "#33FF88",
            "bollinger bands.upper.linewidth": 7
        },
        //List of time frames visible in timeframes picker at the bottom of the chart.
        //https://zlq4863947.gitbooks.io/tradingview/book/Time-Frames.html
        time_frames: [
            { text: "1MN", resolution: "1M", description: "1月" },
            { text: "1w", resolution: "1W" },//ok
            { text: "1d", resolution: "1D" },//ok
            { text: "4h", resolution: "240" },//ok
            { text: "1h", resolution: "60" },//ok
            { text: "30m", resolution: "30" },
            { text: "15m", resolution: "15" },
            { text: "5m", resolution: "5" },
            { text: "1m", resolution: "1" }
        ],
        //"1", "5", "15", "30", "60", "240", "1D","1W","1M"],
        charts_storage_url          : 'http://saveload.tradingview.com',
        charts_storage_api_version  : "1.1",
        client_id                   : 'tradingview.com',
        user_id                     : 'public_user',
        favorites: {
            intervals: ["1D", "3D", "3W", "W", "M"],
            chartTypes: ["Area", "Line"]
        },
       // symbol_search_request_delay : 1000,//在商品搜索按下键后请求之前，以毫秒为单位延迟。
     //   auto_save_delay             :  5000,//延迟秒数等待 onAutoSaveNeeded 可以被再次调用
        toolbar_bg                  : '#f4f7f9',//工具栏背景色

        })
        
        this.symbol = symbol
        this.interval = interval
      }
    },
    sendMessage(data) {
      if (this.socket.checkOpen()) {
        this.socket.send(data)
      } else {
        this.socket.on('open', () => {
          this.socket.send(data)
        })
      }
    },
    unSubscribe(interval) {
      if (interval < 60) {
        this.sendMessage({ cmd: 'unsub', args: [`candle.M${interval}.${this.symbol.toLowerCase()}`, 1440, parseInt(Date.now() / 1000)] })
      } else if (interval >= 60) {
        this.sendMessage({ cmd: 'unsub', args: [`candle.H${interval / 60}.${this.symbol.toLowerCase()}`, 1440, parseInt(Date.now() / 1000)] })
      } else {
        this.sendMessage({ cmd: 'unsub', args: [`candle.D1.${this.symbol.toLowerCase()}`, 207, parseInt(Date.now() / 1000)] })
      }
    },
    subscribe() {
      if (this.interval < 60) {
        this.sendMessage({ cmd: 'sub', args: [`candle.M${this.interval}.${this.symbol.toLowerCase()}`] })
      } else if (this.interval >= 60) {
        this.sendMessage({ cmd: 'sub', args: [`candle.H${this.interval / 60}.${this.symbol.toLowerCase()}`] })
      } else {
        this.sendMessage({ cmd: 'sub', args: [`candle.D1.${this.symbol.toLowerCase()}`] })
      }
    },
    onMessage(data) {
      console.log('data=',data)
      if (data.data && data.data.length) {
        const list = []
        const ticker = `${this.symbol}-${this.interval}`
        data.data.forEach(function (element) {
          list.push({
            time: this.interval !== 'D' || this.interval !== '1D' ? element.id * 1000 : element.id,
            open: element.open,
            high: element.high,
            low: element.low,
            close: element.close,
            volume: element.quote_vol
          })
        }, this)
        this.cacheData[ticker] = list
        this.lastTime = list[list.length - 1].time
        this.subscribe()
      }
      if (data.type && data.type.indexOf(this.symbol.toLowerCase()) !== -1) {
        // console.log(' >> sub:', data.type)
        this.datafeeds.barsUpdater.updateData()
        const ticker = `${this.symbol}-${this.interval}`
        const barsData = {
          time: data.id * 1000,
          open: data.open,
          high: data.high,
          low: data.low,
          close: data.close,
          volume: data.quote_vol
        }
        if (barsData.time >= this.lastTime && this.cacheData[ticker] && this.cacheData[ticker].length) {
          this.cacheData[ticker][this.cacheData[ticker].length - 1] = barsData
        }
      }
    },
    getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onLoadedCallback) {
      // console.log(' >> :', rangeStartDate, rangeEndDate)
      if (this.interval !== resolution) {
        this.unSubscribe(this.interval)
        this.interval = resolution
        if (resolution < 60) {
          this.sendMessage({ cmd: 'req', args: [`candle.M${this.interval}.${this.symbol.toLowerCase()}`, 1440, parseInt(Date.now() / 1000)] })
        } else if (resolution >= 60) {
          this.sendMessage({ cmd: 'req', args: [`candle.H${this.interval / 60}.${this.symbol.toLowerCase()}`, 1440, parseInt(Date.now() / 1000)] })
        } else {
          this.sendMessage({ cmd: 'req', args: [`candle.D1.${this.symbol.toLowerCase()}`, 800, parseInt(Date.now() / 1000)] })
        }
      }
      const ticker = `${this.symbol}-${this.interval}`
      if (this.cacheData[ticker] && this.cacheData[ticker].length) {
        this.isLoading = false
        const newBars = []
        this.cacheData[ticker].forEach(item => {
          if (item.time >= rangeStartDate * 1000 && item.time <= rangeEndDate * 1000) {
            newBars.push(item)
          }
        })
        onLoadedCallback(newBars)
      } else {
        const self = this
        this.getBarTimer = setTimeout(function () {
          self.getBars(symbolInfo, resolution, rangeStartDate, rangeEndDate, onLoadedCallback)
        }, 10)
      }
    }
  }
}
</script>

