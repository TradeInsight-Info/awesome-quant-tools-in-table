# Awesome Quant

> **Browse the full interactive table:** [Awesome Quant Tools on GitHub Pages](https://awesome-quant.TradeInsight.Info)

A curated list of insanely awesome libraries, packages and resources for Quants (Quantitative Finance).




<!-- TOOLS-START -->

## Table of Contents

- [Python](#python) (245)
- [R](#r) (76)
- [Julia](#julia) (24)
- [Rust](#rust) (10)
- [JavaScript](#javascript) (9)
- [CPP](#cpp) (7)
- [Java](#java) (6)
- [CSharp](#csharp) (3)
- [Elixir/Erlang](#elixirerlang) (3)
- [Golang](#golang) (3)
- [Haskell](#haskell) (3)
- [Matlab](#matlab) (3)
- [Scala](#scala) (2)
- [Ruby](#ruby) (1)
- [Reproducing Works, Training & Books](#reproducing-works-training-books) (53)
- [Frameworks](#frameworks) (15)

## Python

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [pymarketstore](https://github.com/alpacahq/pymarketstore) | DataFrame Server for Financial Timeseries Data. | [alpacahq/pymarketstore](https://github.com/alpacahq/pymarketstore) | ★ 114 |

### Calendars

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [bizdays](https://github.com/wilsonfreitas/python-bizdays) | Business days calculations and utilities. | [wilsonfreitas/python-bizdays](https://github.com/wilsonfreitas/python-bizdays) | ★ 89 |
| 2 | [exchange_calendars](https://github.com/gerrymanoim/exchange_calendars) | Stock Exchange Trading Calendars. | [gerrymanoim/exchange_calendars](https://github.com/gerrymanoim/exchange_calendars) | ★ 607 |
| 3 | [pandas_market_calendars](https://github.com/rsheftel/pandas_market_calendars) | Exchange calendars to use with pandas for trading applications. | [rsheftel/pandas_market_calendars](https://github.com/rsheftel/pandas_market_calendars) | ★ 958 |

### Data Sources

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [after-hours](https://github.com/datawrestler/after-hours) | Obtain pre market and after hours stock prices for a given symbol. | [datawrestler/after-hours](https://github.com/datawrestler/after-hours) | ★ 38 |
| 2 | [akshare](https://github.com/jindaxiang/akshare) | AkShare is an elegant and simple financial data interface library for Python, built for human beings! <https://akshare.readthedocs.io> | [jindaxiang/akshare](https://github.com/jindaxiang/akshare) | ★ 17,553 |
| 3 | [alpaca-trade-api](https://github.com/alpacahq/alpaca-trade-api-python) | Python interface for retrieving real-time and historical prices from Alpaca API as well as trade execution. | [alpacahq/alpaca-trade-api-python](https://github.com/alpacahq/alpaca-trade-api-python) | ★ 1,861 |
| 4 | [alpha_vantage](https://github.com/RomelTorres/alpha_vantage) | A python wrapper for Alpha Vantage API for financial data. | [RomelTorres/alpha_vantage](https://github.com/RomelTorres/alpha_vantage) | ★ 4,743 |
| 5 | [bbgbridge](https://github.com/ran404/bbgbridge) | Easy to use Bloomberg Desktop API wrapper for Python. | [ran404/bbgbridge](https://github.com/ran404/bbgbridge) | ★ 2 |
| 6 | [bronto-python](https://pypi.org/project/bronto-python/) | Bronto API Integration for Python. | — | — |
| 7 | [ccy](https://github.com/lsbardel/ccy) | Python module for currencies. | [lsbardel/ccy](https://github.com/lsbardel/ccy) | ★ 95 |
| 8 | [chinesestockapi](https://pypi.org/project/chinesestockapi/) | Python API to get Chinese stock price. | — | — |
| 9 | [cif](https://github.com/LenkaV/CIF) | Python package that include few composite indicators, which summarize multidimensional relationships between individual economic indicators. | [LenkaV/CIF](https://github.com/LenkaV/CIF) | ★ 64 |
| 10 | [cn_stock_src](https://github.com/jealous/cn_stock_src) | Utility for retrieving basic China stock data from different sources. | [jealous/cn_stock_src](https://github.com/jealous/cn_stock_src) | ★ 34 |
| 11 | [coinmarketcap](https://github.com/barnumbirr/coinmarketcap) | Python API for coinmarketcap. | [barnumbirr/coinmarketcap](https://github.com/barnumbirr/coinmarketcap) | ★ 435 |
| 12 | [datamule-python](https://github.com/john-friedman/datamule-python) | A package to work with SEC data. Incorporates datamule endpoints. | [john-friedman/datamule-python](https://github.com/john-friedman/datamule-python) | ★ 518 |
| 13 | [defeatbeta-api](https://github.com/defeat-beta/defeatbeta-api) | An open-source alternative to Yahoo Finance's market data APIs with higher reliability. | [defeat-beta/defeatbeta-api](https://github.com/defeat-beta/defeatbeta-api) | ★ 519 |
| 14 | [Earnings Feed](https://earningsfeed.com/api) | Real-time SEC filings, insider trades, and institutional holdings API. | — | — |
| 15 | [edgar-sec](https://nikhilxsunder.github.io/edgar-sec/) | EDGAR Financial data API with preprocessed dataclass outputs. | [nikhilxsunder/edgar-sec](https://github.com/nikhilxsunder/edgar-sec) | — |
| 16 | [exchange](https://github.com/akarat/exchange) | Get current exchange rate. | [akarat/exchange](https://github.com/akarat/exchange) | ★ 18 |
| 17 | [fedfred](https://nikhilxsunder.github.io/fedfred/) | FRED & GeoFRED Economic data API with preprocessed dataframe output in pandas/geopandas, polars/polars_st, and dask dataframes/geodataframes. | [nikhilxsunder/fedfred](https://github.com/nikhilxsunder/fedfred) | — |
| 18 | [finagg](https://github.com/theOGognf/finagg) | finagg is a Python package that provides implementations of popular and free financial APIs, tools for aggregating historical data from those APIs into SQL databases, and tools for transforming aggregated data into features useful for analysis and AI/ML. | [theOGognf/finagg](https://github.com/theOGognf/finagg) | ★ 525 |
| 19 | [FinanceDatabase](https://github.com/JerBouma/FinanceDatabase) | This is a database of 300.000+ symbols containing Equities, ETFs, Funds, Indices, Currencies, Cryptocurrencies and Money Markets. | [JerBouma/FinanceDatabase](https://github.com/JerBouma/FinanceDatabase) | ★ 7,243 |
| 20 | [FinanceDataReader](https://github.com/FinanceData/FinanceDataReader) | Open Source Financial data reader for U.S, Korean, Japanese, Chinese, Vietnamese Stocks | [FinanceData/FinanceDataReader](https://github.com/FinanceData/FinanceDataReader) | ★ 1,440 |
| 21 | [Financial Data](https://financialdata.net/) | Stock Market and Financial Data API. | — | — |
| 22 | [findatapy](https://github.com/cuemacro/findatapy) | Python library to download market data via Bloomberg, Quandl, Yahoo etc. | [cuemacro/findatapy](https://github.com/cuemacro/findatapy) | ★ 2,008 |
| 23 | [finsymbols](https://github.com/skillachie/finsymbols) | Obtains stock symbols and relating information for SP500, AMEX, NYSE, and NASDAQ. | [skillachie/finsymbols](https://github.com/skillachie/finsymbols) | ★ 123 |
| 24 | [FRB](https://github.com/avelkoski/FRB) | Python Client for FRED® API. | [avelkoski/FRB](https://github.com/avelkoski/FRB) | ★ 180 |
| 25 | [fsynth](https://github.com/welcra/fsynth) | Python library for high-fidelity unlimited synthetic financial data generation using Heston Stochastic Volatility and Merton Jump Diffusion. | [welcra/fsynth](https://github.com/welcra/fsynth) | ★ 4 |
| 26 | [googlefinance](https://github.com/hongtaocai/googlefinance) | Python module to get real-time stock data from Google Finance API. | [hongtaocai/googlefinance](https://github.com/hongtaocai/googlefinance) | ★ 818 |
| 27 | [iexfinance](https://github.com/addisonlynch/iexfinance) | Python Interface for retrieving real-time and historical prices and equities data from The Investor's Exchange. | [addisonlynch/iexfinance](https://github.com/addisonlynch/iexfinance) | ★ 650 |
| 28 | [inquisitor](https://github.com/econdb/inquisitor) | Python Interface to Econdb.com API. | [econdb/inquisitor](https://github.com/econdb/inquisitor) | ★ 56 |
| 29 | [investpy](https://github.com/alvarobartt/investpy) | Financial Data Extraction from Investing.com with Python! <https://investpy.readthedocs.io/> | [alvarobartt/investpy](https://github.com/alvarobartt/investpy) | ★ 1,811 |
| 30 | [jsm](https://pypi.org/project/jsm/) | Get the japanese stock market data. | — | — |
| 31 | [lake-api](https://github.com/crypto-lake/lake-api) | Python interface for Crypto Lake high frequency crypto market data | [crypto-lake/lake-api](https://github.com/crypto-lake/lake-api) | ★ 63 |
| 32 | [market-prices](https://github.com/maread99/market_prices) | Create meaningful OHLCV datasets from knowledge of [exchange-calendars](https://github.com/gerrymanoim/exchange_calendars) (works out-the-box with data from Yahoo Finance). | [maread99/market_prices](https://github.com/maread99/market_prices) | ★ 95 |
| 33 | [metatrader5](https://pypi.org/project/MetaTrader5/) | API Connector to MetaTrader 5 Terminal | — | — |
| 34 | [oilpriceapi](https://github.com/OilpriceAPI/python-sdk) | Python SDK for real-time oil and commodity prices (WTI, Brent, Urals, natural gas, coal) with OpenBB integration. | [OilpriceAPI/python-sdk](https://github.com/OilpriceAPI/python-sdk) | ★ 0 |
| 35 | [pandas-datareader](https://github.com/pydata/pandas-datareader) | Python module to get data from various sources (Google Finance, Yahoo Finance, FRED, OECD, Fama/French, World Bank, Eurostat...) into Pandas datastructures such as DataFrame, Panel with a caching mechanism. | [pydata/pandas-datareader](https://github.com/pydata/pandas-datareader) | ★ 3,169 |
| 36 | [pandas-finance](https://github.com/davidastephens/pandas-finance) | High level API for access to and analysis of financial data. | [davidastephens/pandas-finance](https://github.com/davidastephens/pandas-finance) | ★ 160 |
| 37 | [pandaSDMX](https://github.com/dr-leo/pandaSDMX) | Python package that implements SDMX 2.1 (ISO 17369:2013), a format for exchange of statistical data and metadata used by national statistical agencies, central banks, and international organisations. | [dr-leo/pandaSDMX](https://github.com/dr-leo/pandaSDMX) | ★ 133 |
| 38 | [pdblp](https://github.com/matthewgilbert/pdblp) | A simple interface to integrate pandas and the Bloomberg Open API. | [matthewgilbert/pdblp](https://github.com/matthewgilbert/pdblp) | ★ 255 |
| 39 | [polygon.io](https://github.com/polygon-io/client-python) | A python library for Polygon.io financial data APIs. | [polygon-io/client-python](https://github.com/polygon-io/client-python) | ★ 1,361 |
| 40 | [pybbg](https://github.com/bpsmith/pybbg) | Python interface to Bloomberg COM APIs. | [bpsmith/pybbg](https://github.com/bpsmith/pybbg) | ★ 53 |
| 41 | [pyEX](https://github.com/timkpaine/pyEX) | Python interface to IEX with emphasis on pandas, support for streaming data, premium data, points data (economic, rates, commodities), and technical indicators. | [timkpaine/pyEX](https://github.com/timkpaine/pyEX) | ★ 409 |
| 42 | [pyhoofinance](https://github.com/innes213/pyhoofinance) | Rapidly queries Yahoo Finance for multiple tickers and returns typed data for analysis. | [innes213/pyhoofinance](https://github.com/innes213/pyhoofinance) | ★ 9 |
| 43 | [pystlouisfed](https://github.com/TomasKoutek/pystlouisfed) | Python client for Federal Reserve Bank of St. Louis API - FRED, ALFRED, GeoFRED and FRASER. | [TomasKoutek/pystlouisfed](https://github.com/TomasKoutek/pystlouisfed) | ★ 21 |
| 44 | [pytdx](https://github.com/rainx/pytdx) | Python Interface for retrieving chinese stock realtime quote data from TongDaXin Nodes. | [rainx/pytdx](https://github.com/rainx/pytdx) | ★ 1,506 |
| 45 | [python-bcb](https://github.com/wilsonfreitas/python-bcb) | Python interface to Brazilian Central Bank web services. | [wilsonfreitas/python-bcb](https://github.com/wilsonfreitas/python-bcb) | ★ 109 |
| 46 | [RTPR](https://rtpr.io) | Real-time press release API delivering news from Business Wire, PR Newswire, and GlobeNewswire with sub-500ms latency. Python and Node.js SDKs available. | — | — |
| 47 | [SaxoOpenAPI](https://www.developer.saxo/) | Saxo Bank financial data API. | — | — |
| 48 | [stock_extractor](https://github.com/ZachLiuGIS/stock_extractor) | General Purpose Stock Extractors from Online Resources. | [ZachLiuGIS/stock_extractor](https://github.com/ZachLiuGIS/stock_extractor) | ★ 51 |
| 49 | [Stockex](https://github.com/cttn/Stockex) | Python wrapper for Yahoo! Finance API. | [cttn/Stockex](https://github.com/cttn/Stockex) | ★ 33 |
| 50 | [swiss-finance-data](https://github.com/EMen11/swiss-finance-data) | Python package for Swiss financial data (SNB Policy Rate, SARON, CHF FX rates, CPI, SMI equities, Confederation bond yields) from official SNB sources. | [EMen11/swiss-finance-data](https://github.com/EMen11/swiss-finance-data) | — |
| 51 | [tardis-python](https://github.com/tardis-dev/tardis-python) | Python interface for Tardis.dev high frequency crypto market data | [tardis-dev/tardis-python](https://github.com/tardis-dev/tardis-python) | ★ 140 |
| 52 | [tessa](https://github.com/ymyke/tessa) | simple, hassle-free access to price information of financial assets (currently based on yfinance and pycoingecko), including search and a symbol class. | [ymyke/tessa](https://github.com/ymyke/tessa) | ★ 53 |
| 53 | [ticks](https://github.com/jamescnowell/ticks) | Simple command line tool to get stock ticker data. | [jamescnowell/ticks](https://github.com/jamescnowell/ticks) | ★ 16 |
| 54 | [tiingo](https://github.com/hydrosquall/tiingo-python) | Python interface for daily composite prices/OHLC/Volume + Real-time News Feeds, powered by the Tiingo Data Platform. | [hydrosquall/tiingo-python](https://github.com/hydrosquall/tiingo-python) | ★ 303 |
| 55 | [Trading Strategy](https://github.com/tradingstrategy-ai/trading-strategy/) | download price data for decentralised exchanges and lending protocols (DeFi) | [tradingstrategy-ai/trading-strategy](https://github.com/tradingstrategy-ai/trading-strategy/) | ★ 351 |
| 56 | [tushare](https://pypi.org/project/tushare/) | A utility for crawling historical and Real-time Quotes data of China stocks. | [waditu/tushare](https://github.com/waditu/tushare) | — |
| 57 | [wallstreet](https://github.com/mcdallas/wallstreet) | Real time stock and option data. | [mcdallas/wallstreet](https://github.com/mcdallas/wallstreet) | ★ 1,625 |
| 58 | [yahoo-finance](https://github.com/lukaszbanasiak/yahoo-finance) | Python module to get stock data from Yahoo! Finance. | [lukaszbanasiak/yahoo-finance](https://github.com/lukaszbanasiak/yahoo-finance) | ★ 1,430 |
| 59 | [yahooquery](https://github.com/dpguthrie/yahooquery) | Python interface for retrieving data through unofficial Yahoo Finance API. | [dpguthrie/yahooquery](https://github.com/dpguthrie/yahooquery) | ★ 900 |
| 60 | [yfi](https://github.com/nickelkr/yfi) | Yahoo! YQL library. | [nickelkr/yfi](https://github.com/nickelkr/yfi) | ★ 2 |
| 61 | [yfinance](https://github.com/ranaroussi/yfinance) | Yahoo! Finance market data downloader (+faster Pandas Datareader) | [ranaroussi/yfinance](https://github.com/ranaroussi/yfinance) | ★ 22,256 |
| 62 | [yfinanceapi](https://github.com/Karthik005/yfinanceapi) | Finance API for Python. | [Karthik005/yfinanceapi](https://github.com/Karthik005/yfinanceapi) | ★ 9 |
| 63 | [yliveticker](https://github.com/yahoofinancelive/yliveticker) | Live stream of market data from Yahoo Finance websocket. | [yahoofinancelive/yliveticker](https://github.com/yahoofinancelive/yliveticker) | ★ 163 |
| 64 | [yql-finance](https://github.com/slawek87/yql-finance) | yql-finance is simple and fast. API returns stock closing prices for current period of time and current stock ticker (i.e. APPL, GOOGL). | [slawek87/yql-finance](https://github.com/slawek87/yql-finance) | ★ 16 |
| 65 | [ystockquote](https://github.com/cgoldberg/ystockquote) | Retrieve stock quote data from Yahoo Finance. | [cgoldberg/ystockquote](https://github.com/cgoldberg/ystockquote) | ★ 537 |

### Excel Integration

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [DataNitro](https://datanitro.com/) | DataNitro also offers full-featured Python-Excel integration, including UDFs. Trial downloads are available, but users must purchase a license. | — | — |
| 2 | [expy](http://www.bnikolic.co.uk/expy/expy.html) | The ExPy add-in allows easy use of Python directly from within an Microsoft Excel spreadsheet, both to execute arbitrary code and to define new Excel functions. | [bnikolic/expy](https://github.com/bnikolic/expy) | — |
| 3 | [openpyxl](https://openpyxl.readthedocs.io/en/latest/) | Read/Write Excel 2007 xlsx/xlsm files. | — | — |
| 4 | [pyxll](https://www.pyxll.com) | PyXLL is an Excel add-in that enables you to extend Excel using nothing but Python code. | — | — |
| 5 | [xlloop](http://xlloop.sourceforge.net) | XLLoop is an open source framework for implementing Excel user-defined functions (UDFs) on a centralised server (a function server). | — | — |
| 6 | [xlrd](https://github.com/python-excel/xlrd) | Library for developers to extract data from Microsoft Excel spreadsheet files. | [python-excel/xlrd](https://github.com/python-excel/xlrd) | ★ 2,203 |
| 7 | [xlsxwriter](https://xlsxwriter.readthedocs.io/) | Write files in the Excel 2007+ XLSX file format. | [jmcnamara/XlsxWriter](https://github.com/jmcnamara/XlsxWriter) | — |
| 8 | [xlwings](https://www.xlwings.org/) | Make Excel fly with Python. | [xlwings/xlwings](https://github.com/xlwings/xlwings) | — |
| 9 | [xlwt](https://github.com/python-excel/xlwt) | Library to create spreadsheet files compatible with MS Excel 97/2000/XP/2003 XLS files, on any platform. | [python-excel/xlwt](https://github.com/python-excel/xlwt) | ★ 1,046 |

### Factor Analysis

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [alphalens](https://github.com/quantopian/alphalens) | Performance analysis of predictive alpha factors. | [quantopian/alphalens](https://github.com/quantopian/alphalens) | ★ 4,187 |
| 2 | [alphalens-reloaded](https://github.com/stefan-jansen/alphalens-reloaded) | Performance analysis of predictive (alpha) stock factors. | [stefan-jansen/alphalens-reloaded](https://github.com/stefan-jansen/alphalens-reloaded) | ★ 556 |
| 3 | [Spectre](https://github.com/Heerozh/spectre) | GPU-accelerated Factors analysis library and Backtester | [Heerozh/spectre](https://github.com/Heerozh/spectre) | ★ 784 |

### Financial Instruments and Pricing

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [AbsBox](https://github.com/yellowbean/AbsBox) | A Python based library to model cashflow for structured product like Asset-backed securities (ABS) and Mortgage-backed securities (MBS). | [yellowbean/AbsBox](https://github.com/yellowbean/AbsBox) | ★ 64 |
| 2 | [ffn](https://github.com/pmorissette/ffn) | A financial function library for Python. | [pmorissette/ffn](https://github.com/pmorissette/ffn) | ★ 2,519 |
| 3 | [Finance-Python](https://github.com/alpha-miner/Finance-Python) | Python tools for Finance. | [alpha-miner/Finance-Python](https://github.com/alpha-miner/Finance-Python) | ★ 873 |
| 4 | [FinancePy](https://github.com/domokane/FinancePy) | A Python Finance Library that focuses on the pricing and risk-management of Financial Derivatives, including fixed-income, equity, FX and credit derivatives. | [domokane/FinancePy](https://github.com/domokane/FinancePy) | ★ 2,835 |
| 5 | [financial-engineering](https://github.com/federicomariamassari/financial-engineering) | Applications of Monte Carlo methods to financial engineering projects, in Python. | [federicomariamassari/financial-engineering](https://github.com/federicomariamassari/financial-engineering) | ★ 500 |
| 6 | [Fincept Terminal](https://github.com/Fincept-Corporation/FinceptTerminal) | Advance Data Based A.I Terminal for all Types of Financial Asset Research. | [Fincept-Corporation/FinceptTerminal](https://github.com/Fincept-Corporation/FinceptTerminal) | ★ 2,851 |
| 7 | [finoptions](https://github.com/bbcho/finoptions-dev) | Complete python implementation of R package fOptions with partial implementation of fExoticOptions for pricing various options. | [bbcho/finoptions-dev](https://github.com/bbcho/finoptions-dev) | ★ 295 |
| 8 | [fypy](https://github.com/jkirkby3/fypy) | Vanilla and exotic option pricing library to support quantitative R&D. Focus on pricing interesting/useful models and contracts (including and beyond Black-Scholes), as well as calibration of financial models to market data. | [jkirkby3/fypy](https://github.com/jkirkby3/fypy) | ★ 139 |
| 9 | [gs-quant](https://github.com/goldmansachs/gs-quant) | Python toolkit for quantitative finance | [goldmansachs/gs-quant](https://github.com/goldmansachs/gs-quant) | ★ 9,997 |
| 10 | [hasura/base-python-bokeh](https://platform.hasura.io/hub/projects/hasura/base-python-bokeh) | Hasura quick start to visualize data with bokeh library. | [hasura/base-python-bokeh](https://github.com/hasura/base-python-bokeh) | — |
| 11 | [hasura/base-python-dash](https://platform.hasura.io/hub/projects/hasura/base-python-dash) | Hasura quick start to deploy Dash framework. Written on top of Flask, Plotly.js, and React.js, Dash is ideal for building data visualization apps with highly custom user interfaces in pure Python. | [hasura/base-python-dash](https://github.com/hasura/base-python-dash) | — |
| 12 | [Intrinsic-Value-Calculator](https://github.com/akashaero/Intrinsic-Value-Calculator) | A Python tool for quick calculations of a stock's fair value using Discounted Cash Flow analysis. | [akashaero/Intrinsic-Value-Calculator](https://github.com/akashaero/Intrinsic-Value-Calculator) | ★ 83 |
| 13 | [Kelly-Criterion](https://github.com/deltaray-io/kelly-criterion) | Kelly Criterion implemented in Python to size portfolios based on J. L. Kelly Jr's formula. | [deltaray-io/kelly-criterion](https://github.com/deltaray-io/kelly-criterion) | ★ 110 |
| 14 | [OpenBB Terminal](https://github.com/OpenBB-finance/OpenBBTerminal) | Terminal for investment research for everyone. | [OpenBB-finance/OpenBBTerminal](https://github.com/OpenBB-finance/OpenBBTerminal) | ★ 63,389 |
| 15 | [optlib](https://github.com/dbrojas/optlib) | A library for financial options pricing written in Python. | [dbrojas/optlib](https://github.com/dbrojas/optlib) | ★ 1,347 |
| 16 | [pyfin](https://github.com/opendoor-labs/pyfin) | Basic options pricing in Python. *ARCHIVED* | [opendoor-labs/pyfin](https://github.com/opendoor-labs/pyfin) | ★ 316 |
| 17 | [pynance](https://github.com/GriffinAustin/pynance) | Lightweight Python library for assembling and analyzing financial data. | [GriffinAustin/pynance](https://github.com/GriffinAustin/pynance) | ★ 439 |
| 18 | [pypme](https://github.com/ymyke/pypme) | PME (Public Market Equivalent) calculation. | [ymyke/pypme](https://github.com/ymyke/pypme) | ★ 13 |
| 19 | [PyQL](https://github.com/enthought/pyql) | QuantLib's Python port. | [enthought/pyql](https://github.com/enthought/pyql) | ★ 1,261 |
| 20 | [pysabr](https://github.com/ynouri/pysabr) | SABR model Python implementation. | [ynouri/pysabr](https://github.com/ynouri/pysabr) | ★ 591 |
| 21 | [Q-Fin](https://github.com/RomanMichaelPaolucci/Q-Fin) | A Python library for mathematical finance. | [RomanMichaelPaolucci/Q-Fin](https://github.com/RomanMichaelPaolucci/Q-Fin) | ★ 582 |
| 22 | [QuantPy](https://github.com/jsmidt/QuantPy) | A framework for quantitative finance In python. | [jsmidt/QuantPy](https://github.com/jsmidt/QuantPy) | ★ 973 |
| 23 | [Quantsbin](https://github.com/quantsbin/Quantsbin) | Tools for pricing and plotting of vanilla option prices, greeks and various other analysis around them. | [quantsbin/Quantsbin](https://github.com/quantsbin/Quantsbin) | ★ 612 |
| 24 | [rateslib](https://github.com/attack68/rateslib) | A fixed income library for pricing bonds and bond futures, and derivatives such as IRS, cross-currency and FX swaps. | [attack68/rateslib](https://github.com/attack68/rateslib) | ★ 327 |
| 25 | [tf-quant-finance](https://github.com/google/tf-quant-finance) | High-performance TensorFlow library for quantitative finance. | [google/tf-quant-finance](https://github.com/google/tf-quant-finance) | ★ 5,265 |
| 26 | [tia](https://github.com/bpsmith/tia) | Toolkit for integration and analysis. | [bpsmith/tia](https://github.com/bpsmith/tia) | ★ 430 |
| 27 | [vollib](https://github.com/vollib/vollib) | vollib is a python library for calculating option prices, implied volatility and greeks. | [vollib/vollib](https://github.com/vollib/vollib) | ★ 929 |
| 28 | [willowtree](https://github.com/federicomariamassari/willowtree) | Robust and flexible Python implementation of the willow tree lattice for derivatives pricing. | [federicomariamassari/willowtree](https://github.com/federicomariamassari/willowtree) | ★ 344 |

### Indicators

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [finta](https://github.com/peerchemist/finta) | Common financial technical analysis indicators implemented in Pandas. | [peerchemist/finta](https://github.com/peerchemist/finta) | ★ 2,246 |
| 2 | [lppls](https://github.com/Boulder-Investment-Technologies/lppls) | A Python module for fitting the [Log-Periodic Power Law Singularity (LPPLS)](https://en.wikipedia.org/wiki/Didier_Sornette#The_JLS_and_LPPLS_models) model. | [Boulder-Investment-Technologies/lppls](https://github.com/Boulder-Investment-Technologies/lppls) | ★ 449 |
| 3 | [pandas_talib](https://github.com/femtotrader/pandas_talib) | A Python Pandas implementation of technical analysis indicators. | [femtotrader/pandas_talib](https://github.com/femtotrader/pandas_talib) | ★ 782 |
| 4 | [streaming_indicators](https://github.com/mr-easy/streaming_indicators) | A python library for computing technical analysis indicators on streaming data. | [mr-easy/streaming_indicators](https://github.com/mr-easy/streaming_indicators) | ★ 146 |
| 5 | [talipp](https://github.com/nardew/talipp) | Incremental technical analysis library for Python. | [nardew/talipp](https://github.com/nardew/talipp) | ★ 526 |
| 6 | [Tulipy](https://github.com/cirla/tulipy) | Financial Technical Analysis Indicator Library (Python bindings for [tulipindicators](https://github.com/TulipCharts/tulipindicators)) | [cirla/tulipy](https://github.com/cirla/tulipy) | ★ 92 |

### Numerical Libraries & Data Structures

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [ArcticDB](https://github.com/man-group/ArcticDB) | High performance datastore for time series and tick data. | [man-group/ArcticDB](https://github.com/man-group/ArcticDB) | ★ 2,223 |
| 2 | [modelx](https://docs.modelx.io/) | Python reimagination of spreadsheets as formula-centric objects that are interoperable with pandas. | [fumitoh/modelx](https://github.com/fumitoh/modelx) | — |
| 3 | [numpy](https://www.numpy.org) | NumPy is the fundamental package for scientific computing with Python. | [numpy/numpy](https://github.com/numpy/numpy) | — |
| 4 | [pandas](https://pandas.pydata.org) | pandas is an open source, BSD-licensed library providing high-performance, easy-to-use data structures and data analysis tools for the Python programming language. | [pandas-dev/pandas](https://github.com/pandas-dev/pandas) | — |
| 5 | [polars](https://docs.pola.rs/) | Polars is a blazingly fast DataFrame library for manipulating structured data. | [pola-rs/polars](https://github.com/pola-rs/polars) | — |
| 6 | [pymc3](https://docs.pymc.io/) | Probabilistic Programming in Python: Bayesian Modeling and Probabilistic Machine Learning with Theano. | [pymc-devs/pymc](https://github.com/pymc-devs/pymc) | — |
| 7 | [quantdsl](https://github.com/johnbywater/quantdsl) | Domain specific language for quantitative analytics in finance and trading. | [johnbywater/quantdsl](https://github.com/johnbywater/quantdsl) | ★ 377 |
| 8 | [scipy](https://www.scipy.org) | SciPy (pronounced “Sigh Pie”) is a Python-based ecosystem of open-source software for mathematics, science, and engineering. | [scipy/scipy](https://github.com/scipy/scipy) | — |
| 9 | [statistics](https://docs.python.org/3/library/statistics.html) | Builtin Python library for all basic statistical calculations. | — | — |
| 10 | [sympy](https://www.sympy.org/) | SymPy is a Python library for symbolic mathematics. | [sympy/sympy](https://github.com/sympy/sympy) | — |

### Quant Research Environment

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [Jupyter Quant](https://github.com/gnzsnz/jupyter-quant) | A dockerized Jupyter quant research environment with preloaded tools for quant analysis, statsmodels, pymc, arch, py_vollib, zipline-reloaded, PyPortfolioOpt, etc. | [gnzsnz/jupyter-quant](https://github.com/gnzsnz/jupyter-quant) | ★ 19 |

### Risk Analysis

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [Empyrial](https://github.com/ssantoshp/Empyrial) | Portfolio's risk and performance analytics and returns predictions. | [ssantoshp/Empyrial](https://github.com/ssantoshp/Empyrial) | ★ 1,053 |
| 2 | [empyrical](https://github.com/quantopian/empyrical) | Common financial risk and performance metrics. | [quantopian/empyrical](https://github.com/quantopian/empyrical) | ★ 1,475 |
| 3 | [empyrical-reloaded](https://github.com/stefan-jansen/empyrical-reloaded) | Common financial risk and performance metrics. [empyrical](https://github.com/quantopian/empyrical) fork. | [stefan-jansen/empyrical-reloaded](https://github.com/stefan-jansen/empyrical-reloaded) | ★ 101 |
| 4 | [fecon235](https://github.com/rsvp/fecon235) | Computational tools for financial economics include: Gaussian Mixture model of leptokurtotic risk, adaptive Boltzmann portfolios. | [rsvp/fecon235](https://github.com/rsvp/fecon235) | ★ 1,255 |
| 5 | [finance](https://pypi.org/project/finance/) | Financial Risk Calculations. Optimized for ease of use through class construction and operator overload. | — | — |
| 6 | [FinQuant](https://github.com/fmilthaler/FinQuant) | A program for financial portfolio management, analysis and optimization. | [fmilthaler/FinQuant](https://github.com/fmilthaler/FinQuant) | ★ 1,731 |
| 7 | [fortitudo.tech](https://github.com/fortitudo-tech/fortitudo.tech) | Conditional Value-at-Risk (CVaR) portfolio optimization and Entropy Pooling views / stress-testing in Python. | [fortitudo-tech/fortitudo.tech](https://github.com/fortitudo-tech/fortitudo.tech) | ★ 289 |
| 8 | [pyfolio](https://github.com/quantopian/pyfolio) | Portfolio and risk analytics in Python. | [quantopian/pyfolio](https://github.com/quantopian/pyfolio) | ★ 6,263 |
| 9 | [pyfolio-reloaded](https://github.com/stefan-jansen/pyfolio-reloaded) | Portfolio and risk analytics in Python. [pyfolio](https://github.com/quantopian/pyfolio) fork. | [stefan-jansen/pyfolio-reloaded](https://github.com/stefan-jansen/pyfolio-reloaded) | ★ 579 |
| 10 | [qfrm](https://pypi.org/project/qfrm/) | Quantitative Financial Risk Management: awesome OOP tools for measuring, managing and visualizing risk of financial instruments and portfolios. | — | — |
| 11 | [quantitative-finance-tools](https://github.com/omichauhan-lgtm/quantitative-finance-tools) | Library for portfolio optimization (MVO) and rigorous risk metrics (VaR/CVaR). | [omichauhan-lgtm/quantitative-finance-tools](https://github.com/omichauhan-lgtm/quantitative-finance-tools) | ★ 4 |
| 12 | [QuantLibRisks](https://github.com/auto-differentiation/QuantLib-Risks-Py) | Fast risks with QuantLib | [auto-differentiation/QuantLib-Risks-Py](https://github.com/auto-differentiation/QuantLib-Risks-Py) | ★ 19 |
| 13 | [Riskfolio-Lib](https://github.com/dcajasn/Riskfolio-Lib) | Portfolio Optimization and Quantitative Strategic Asset Allocation in Python. | [dcajasn/Riskfolio-Lib](https://github.com/dcajasn/Riskfolio-Lib) | ★ 3,824 |
| 14 | [risktools](https://github.com/bbcho/risktools-dev) | Risk tools for use within the crude and crude products trading space with partial implementation of R's PerformanceAnalytics. | [bbcho/risktools-dev](https://github.com/bbcho/risktools-dev) | ★ 38 |
| 15 | [universal-portfolios](https://github.com/Marigold/universal-portfolios) | Collection of algorithms for online portfolio selection. | [Marigold/universal-portfolios](https://github.com/Marigold/universal-portfolios) | ★ 850 |
| 16 | [visualize-wealth](https://github.com/benjaminmgross/visualize-wealth) | Portfolio construction and quantitative analysis. | [benjaminmgross/visualize-wealth](https://github.com/benjaminmgross/visualize-wealth) | ★ 146 |
| 17 | [VisualPortfolio](https://github.com/wegamekinglc/VisualPortfolio) | This tool is used to visualize the performance of a portfolio. | [wegamekinglc/VisualPortfolio](https://github.com/wegamekinglc/VisualPortfolio) | ★ 107 |
| 18 | [XAD](https://github.com/auto-differentiation/xad-py) | Automatic Differentation (AAD) Library | [auto-differentiation/xad-py](https://github.com/auto-differentiation/xad-py) | ★ 19 |

### Sentiment Analysis

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [Asset News Sentiment Analyzer](https://github.com/KVignesh122/AssetNewsSentimentAnalyzer) | Sentiment analysis and report generation package for financial assets and securities utilizing GPT models. | [KVignesh122/AssetNewsSentimentAnalyzer](https://github.com/KVignesh122/AssetNewsSentimentAnalyzer) | ★ 192 |

### Time Series

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [ARCH](https://github.com/bashtage/arch) | ARCH models in Python. | [bashtage/arch](https://github.com/bashtage/arch) | ★ 1,496 |
| 2 | [dynts](https://github.com/quantmind/dynts) | Python package for timeseries analysis and manipulation. | [quantmind/dynts](https://github.com/quantmind/dynts) | ★ 87 |
| 3 | [Facebook Prophet](https://github.com/facebook/prophet) | Tool for producing high quality forecasts for time series data that has multiple seasonality with linear or non-linear growth. | [facebook/prophet](https://github.com/facebook/prophet) | ★ 20,086 |
| 4 | [functime](https://github.com/functime-org/functime) | Time-series machine learning at scale. Built with Polars for embarrassingly parallel feature extraction and forecasts on panel data. | [functime-org/functime](https://github.com/functime-org/functime) | ★ 1,168 |
| 5 | [gluon-ts](https://github.com/awslabs/gluon-ts) | vProbabilistic time series modeling in Python. | [awslabs/gluon-ts](https://github.com/awslabs/gluon-ts) | ★ 5,146 |
| 6 | [hasura/quandl-metabase](https://platform.hasura.io/hub/projects/anirudhm/quandl-metabase-time-series) | Hasura quickstart to visualize Quandl's timeseries datasets with Metabase. | — | — |
| 7 | [pmdarima](https://github.com/alkaline-ml/pmdarima) | A statistical library designed to fill the void in Python's time series analysis capabilities, including the equivalent of R's auto.arima function. | [alkaline-ml/pmdarima](https://github.com/alkaline-ml/pmdarima) | ★ 1,717 |
| 8 | [PyFlux](https://github.com/RJT1990/pyflux) | Python library for timeseries modelling and inference (frequentist and Bayesian) on models. | [RJT1990/pyflux](https://github.com/RJT1990/pyflux) | ★ 2,141 |
| 9 | [statsmodels](http://statsmodels.sourceforge.net) | Python module that allows users to explore data, estimate statistical models, and perform statistical tests. | [statsmodels/statsmodels](https://github.com/statsmodels/statsmodels) | — |
| 10 | [tsfresh](https://github.com/blue-yonder/tsfresh) | Automatic extraction of relevant features from time series. | [blue-yonder/tsfresh](https://github.com/blue-yonder/tsfresh) | ★ 9,153 |
| 11 | [tsmoothie](https://github.com/cerlymarco/tsmoothie) | A python library for time-series smoothing and outlier detection in a vectorized way. | [cerlymarco/tsmoothie](https://github.com/cerlymarco/tsmoothie) | ★ 769 |

### Trading & Backtesting

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [aat](https://github.com/timkpaine/aat) | Async Algorithmic Trading Engine | [timkpaine/aat](https://github.com/timkpaine/aat) | ★ 780 |
| 2 | [algobroker](https://github.com/joequant/algobroker) | This is an execution engine for algo trading. | [joequant/algobroker](https://github.com/joequant/algobroker) | ★ 97 |
| 3 | [algorithmic-trading-with-python](https://github.com/chrisconlan/algorithmic-trading-with-python) | Free `pandas` and `scikit-learn` resources for trading simulation, backtesting, and machine learning on financial data. | [chrisconlan/algorithmic-trading-with-python](https://github.com/chrisconlan/algorithmic-trading-with-python) | ★ 3,262 |
| 4 | [AlphaPy](https://github.com/ScottfreeLLC/AlphaPy) | Automated Machine Learning [AutoML] with Python, scikit-learn, Keras, XGBoost, LightGBM, and CatBoost | [ScottfreeLLC/AlphaPy](https://github.com/ScottfreeLLC/AlphaPy) | ★ 1,703 |
| 5 | [analyzer](https://github.com/llazzaro/analyzer) | Python framework for real-time financial and backtesting trading strategies. | [llazzaro/analyzer](https://github.com/llazzaro/analyzer) | ★ 214 |
| 6 | [AutoTrader](https://github.com/kieran-mackle/AutoTrader) | A Python-based development platform for automated trading systems - from backtesting to optimization to livetrading. | [kieran-mackle/AutoTrader](https://github.com/kieran-mackle/AutoTrader) | ★ 1,235 |
| 7 | [Backtesting.py](https://kernc.github.io/backtesting.py/) | Backtest trading strategies in Python | [kernc/backtesting.py](https://github.com/kernc/backtesting.py) | — |
| 8 | [backtrader](https://github.com/backtrader/backtrader) | Python Backtesting library for trading strategies. | [backtrader/backtrader](https://github.com/backtrader/backtrader) | ★ 20,859 |
| 9 | [basana](https://github.com/gbeced/basana) | A Python async and event driven framework for algorithmic trading, with a focus on crypto currencies. | [gbeced/basana](https://github.com/gbeced/basana) | ★ 820 |
| 10 | [binary-martingale](https://github.com/metaperl/binary-martingale) | Computer program to automatically trade binary options martingale style. | [metaperl/binary-martingale](https://github.com/metaperl/binary-martingale) | ★ 48 |
| 11 | [Blankly](https://github.com/Blankly-Finance/Blankly) | Fully integrated backtesting, paper trading, and live deployment. | [Blankly-Finance/Blankly](https://github.com/Blankly-Finance/Blankly) | ★ 2,415 |
| 12 | [bt](https://github.com/pmorissette/bt) | Flexible Backtesting for Python. | [pmorissette/bt](https://github.com/pmorissette/bt) | ★ 2,830 |
| 13 | [bta-lib](https://github.com/mementum/bta-lib) | Technical Analysis library in pandas for backtesting algotrading and quantitative analysis. | [mementum/bta-lib](https://github.com/mementum/bta-lib) | ★ 492 |
| 14 | [bulbea](https://github.com/achillesrasquinha/bulbea) | Deep Learning based Python Library for Stock Market Prediction and Modelling. | [achillesrasquinha/bulbea](https://github.com/achillesrasquinha/bulbea) | ★ 2,263 |
| 15 | [catalyst](https://github.com/enigmampc/catalyst) | An Algorithmic Trading Library for Crypto-Assets in Python | [enigmampc/catalyst](https://github.com/enigmampc/catalyst) | ★ 2,556 |
| 16 | [DeepDow](https://github.com/jankrepl/deepdow) | Portfolio optimization with deep learning | [jankrepl/deepdow](https://github.com/jankrepl/deepdow) | ★ 1,117 |
| 17 | [Eiten](https://github.com/tradytics/eiten) | Eiten is an open source toolkit by Tradytics that implements various statistical and algorithmic investing strategies such as Eigen Portfolios, Minimum Variance Portfolios, Maximum Sharpe Ratio Portfolios, and Genetic Algorithms based Portfolios. | [tradytics/eiten](https://github.com/tradytics/eiten) | ★ 3,165 |
| 18 | [fast-trade](https://github.com/jrmeier/fast-trade) | A library built with backtest portability and performance in mind for backtest trading strategies. | [jrmeier/fast-trade](https://github.com/jrmeier/fast-trade) | ★ 532 |
| 19 | [fast-trade](https://github.com/jrmeier/fast-trade) | Low code backtesting library utilizing pandas and technical analysis indicators. | [jrmeier/fast-trade](https://github.com/jrmeier/fast-trade) | ★ 532 |
| 20 | [fastquant](https://github.com/enzoampil/fastquant) | fastquant allows you to easily backtest investment strategies with as few as 3 lines of python code. | [enzoampil/fastquant](https://github.com/enzoampil/fastquant) | ★ 1,746 |
| 21 | [finmarketpy](https://github.com/cuemacro/finmarketpy) | Python library for backtesting trading strategies and analyzing financial markets. | [cuemacro/finmarketpy](https://github.com/cuemacro/finmarketpy) | ★ 3,727 |
| 22 | [FinRL-Library](https://github.com/AI4Finance-LLC/FinRL-Library) | A Deep Reinforcement Learning Library for Automated Trading in Quantitative Finance. NeurIPS 2020. | [AI4Finance-LLC/FinRL-Library](https://github.com/AI4Finance-LLC/FinRL-Library) | ★ 14,245 |
| 23 | [fooltrader](https://github.com/foolcage/fooltrader) | the project using big-data technology to provide an uniform way to analyze the whole market. | [foolcage/fooltrader](https://github.com/foolcage/fooltrader) | ★ 1,182 |
| 24 | [freqtrade](https://github.com/freqtrade/freqtrade) | Free, open source crypto trading bot | [freqtrade/freqtrade](https://github.com/freqtrade/freqtrade) | ★ 47,888 |
| 25 | [Gunbot Quant](https://github.com/GuntharDeNiro/gunbot-quant) | Toolkit for quantitative trading analysis. It integrates an advanced market screener, a multi-strategy, multi-asset backtesting engine. Use with built-in GUI or through CLI. | [GuntharDeNiro/gunbot-quant](https://github.com/GuntharDeNiro/gunbot-quant) | ★ 42 |
| 26 | [hftbacktest](https://github.com/nkaz001/hftbacktest) | A high-frequency trading and market-making backtesting tool accounts for limit orders, queue positions, and latencies, utilizing full tick data for trades and order books. | [nkaz001/hftbacktest](https://github.com/nkaz001/hftbacktest) | ★ 3,832 |
| 27 | [Hikyuu](https://github.com/fasiondog/hikyuu) | A base on Python/C++ open source high-performance quant framework for faster analysis and backtesting, contains the complete trading system components for reuse and combination. | [fasiondog/hikyuu](https://github.com/fasiondog/hikyuu) | ★ 3,050 |
| 28 | [ib_nope](https://github.com/ajhpark/ib_nope) | Automated trading system for NOPE strategy over IBKR TWS. | [ajhpark/ib_nope](https://github.com/ajhpark/ib_nope) | ★ 33 |
| 29 | [Intelligent Trading Bot](https://github.com/asavinov/intelligent-trading-bot) | Automatically generating signals and trading based on machine learning and feature engineering | [asavinov/intelligent-trading-bot](https://github.com/asavinov/intelligent-trading-bot) | ★ 1,642 |
| 30 | [Investing algorithm framework](https://github.com/coding-kitties/investing-algorithm-framework) | Framework for developing, backtesting, and deploying automated trading algorithms. | [coding-kitties/investing-algorithm-framework](https://github.com/coding-kitties/investing-algorithm-framework) | ★ 700 |
| 31 | [jesse](https://github.com/jesse-ai/jesse) | An advanced crypto trading bot written in Python | [jesse-ai/jesse](https://github.com/jesse-ai/jesse) | ★ 7,566 |
| 32 | [Lean](https://github.com/QuantConnect/Lean) | Lean Algorithmic Trading Engine by QuantConnect (Python, C#). | [QuantConnect/Lean](https://github.com/QuantConnect/Lean) | ★ 17,984 |
| 33 | [machine-learning-for-trading](https://github.com/stefan-jansen/machine-learning-for-trading) | Code and resources for Machine Learning for Algorithmic Trading | [stefan-jansen/machine-learning-for-trading](https://github.com/stefan-jansen/machine-learning-for-trading) | ★ 16,797 |
| 34 | [mlfinlab](https://github.com/hudson-and-thames/mlfinlab) | Implementations regarding Advances in Financial Machine Learning by Marcos Lopez de Prado. (Feature Engineering, Financial Data Structures, Meta-Labeling) | [hudson-and-thames/mlfinlab](https://github.com/hudson-and-thames/mlfinlab) | ★ 4,618 |
| 35 | [moonshot](https://github.com/quantrocket-llc/moonshot) | Vectorized backtester and trading engine for QuantRocket based on Pandas. | [quantrocket-llc/moonshot](https://github.com/quantrocket-llc/moonshot) | ★ 256 |
| 36 | [nautilus_trader](https://github.com/nautechsystems/nautilus_trader) | A high-performance algorithmic trading platform and event-driven backtester. | [nautechsystems/nautilus_trader](https://github.com/nautechsystems/nautilus_trader) | ★ 21,325 |
| 37 | [NowTrade](https://github.com/edouardpoitras/NowTrade) | Python library for backtesting technical/mechanical strategies in the stock and currency markets. | [edouardpoitras/NowTrade](https://github.com/edouardpoitras/NowTrade) | ★ 101 |
| 38 | [OctoBot](https://github.com/Drakkar-Software/OctoBot) | Open source cryptocurrency trading bot for high frequency, arbitrage, TA and social trading with an advanced web interface. | [Drakkar-Software/OctoBot](https://github.com/Drakkar-Software/OctoBot) | ★ 5,491 |
| 39 | [OctoBot Script](https://github.com/Drakkar-Software/OctoBot-Script) | A quant framework to create cryptocurrencies strategies - from backtesting to optimization to livetrading. | [Drakkar-Software/OctoBot-Script](https://github.com/Drakkar-Software/OctoBot-Script) | ★ 39 |
| 40 | [Pandas TA (Not Open Source Anymore)](https://www.pandas-ta.dev/) | Pandas TA is an easy to use Python 3 Pandas Extension with 115+ Indicators. Easily build Custom Strategies. | — | — |
| 41 | [pinkfish](https://github.com/fja05680/pinkfish) | A backtester and spreadsheet library for security analysis. | [fja05680/pinkfish](https://github.com/fja05680/pinkfish) | ★ 293 |
| 42 | [pipeline-live](https://github.com/alpacahq/pipeline-live) | zipline's pipeline capability with IEX for live trading. | [alpacahq/pipeline-live](https://github.com/alpacahq/pipeline-live) | ★ 206 |
| 43 | [pyalgotrade](https://github.com/gbeced/pyalgotrade) | Python Algorithmic Trading Library. | [gbeced/pyalgotrade](https://github.com/gbeced/pyalgotrade) | ★ 4,643 |
| 44 | [pybacktest](https://github.com/ematvey/pybacktest) | Vectorized backtesting framework in Python / pandas, designed to make your backtesting easier. | [ematvey/pybacktest](https://github.com/ematvey/pybacktest) | ★ 817 |
| 45 | [PyBroker](https://github.com/edtechre/pybroker) | Algorithmic Trading with Machine Learning. | [edtechre/pybroker](https://github.com/edtechre/pybroker) | ★ 3,240 |
| 46 | [pylivetrader](https://github.com/alpacahq/pylivetrader) | zipline-compatible live trading library. | [alpacahq/pylivetrader](https://github.com/alpacahq/pylivetrader) | ★ 681 |
| 47 | [PyLOB](https://github.com/DrAshBooth/PyLOB) | Fully functioning fast Limit Order Book written in Python. | [DrAshBooth/PyLOB](https://github.com/DrAshBooth/PyLOB) | ★ 198 |
| 48 | [PyPortfolioOpt](https://github.com/robertmartin8/PyPortfolioOpt) | Financial portfolio optimization in python, including classical efficient frontier and advanced methods. | [robertmartin8/PyPortfolioOpt](https://github.com/robertmartin8/PyPortfolioOpt) | ★ 5,568 |
| 49 | [pyqstrat](https://github.com/abbass2/pyqstrat) | A fast, extensible, transparent python library for backtesting quantitative strategies. | [abbass2/pyqstrat](https://github.com/abbass2/pyqstrat) | ★ 371 |
| 50 | [pysentosa](https://pypi.org/project/pysentosa/) | Python API for sentosa trading system. | — | — |
| 51 | [pysystemtrade](https://github.com/robcarver17/pysystemtrade) | pysystemtrade is the open source version of Robert Carver's backtesting and trading engine that implements systems according to the framework outlined in his book Systematic Trading, which is further developed on his [blog](https://qoppac.blogspot.com/). | [robcarver17/pysystemtrade](https://github.com/robcarver17/pysystemtrade) | ★ 3,233 |
| 52 | [pythalesians](https://github.com/thalesians/pythalesians) | Python library to backtest trading strategies, plot charts, seamlessly download market data, analyze market patterns etc. | [thalesians/pythalesians](https://github.com/thalesians/pythalesians) | ★ 63 |
| 53 | [pytrendseries](https://github.com/rafa-rod/pytrendseries) | Detect trend in time series, drawdown, drawdown within a constant look-back window , maximum drawdown, time underwater. | [rafa-rod/pytrendseries](https://github.com/rafa-rod/pytrendseries) | ★ 163 |
| 54 | [qf-lib](https://github.com/quarkfin/qf-lib) | QF-Lib is a Python library that provides high quality tools for quantitative finance. | [quarkfin/qf-lib](https://github.com/quarkfin/qf-lib) | ★ 902 |
| 55 | [Qlib](https://github.com/microsoft/qlib) | An AI-oriented Quantitative Investment Platform by Microsoft. Full ML pipeline of data processing, model training, back-testing; and covers the entire chain of quantitative investment: alpha seeking, risk modeling, portfolio optimization, and order execution. | [microsoft/qlib](https://github.com/microsoft/qlib) | ★ 39,149 |
| 56 | [QSTrader](https://github.com/mhallsmoore/qstrader) | QSTrader backtesting simulation engine. | [mhallsmoore/qstrader](https://github.com/mhallsmoore/qstrader) | ★ 3,326 |
| 57 | [qtpylib](https://github.com/ranaroussi/qtpylib) | QTPyLib, Pythonic Algorithmic Trading <http://qtpylib.io> | [ranaroussi/qtpylib](https://github.com/ranaroussi/qtpylib) | ★ 2,255 |
| 58 | [Quantdom](https://github.com/constverum/Quantdom) | Python-based framework for backtesting trading strategies & analyzing financial markets [GUI :neckbeard:] | [constverum/Quantdom](https://github.com/constverum/Quantdom) | ★ 761 |
| 59 | [quantitative](https://github.com/jeffrey-liang/quantitative) | Quantitative finance, and backtesting library. | [jeffrey-liang/quantitative](https://github.com/jeffrey-liang/quantitative) | ★ 66 |
| 60 | [QuantSoftware Toolkit](https://github.com/QuantSoftware/QuantSoftwareToolkit) | Python-based open source software framework designed to support portfolio construction and management. | [QuantSoftware/QuantSoftwareToolkit](https://github.com/QuantSoftware/QuantSoftwareToolkit) | ★ 476 |
| 61 | [quantstats](https://github.com/ranaroussi/quantstats) | Portfolio analytics for quants, written in Python | [ranaroussi/quantstats](https://github.com/ranaroussi/quantstats) | ★ 6,872 |
| 62 | [rebalance](https://github.com/cjroth/rebalance) | Interactive portfolio rebalancing tool that imports brokerage CSV data, sets target allocations, and generates trade instructions. | [cjroth/rebalance](https://github.com/cjroth/rebalance) | — |
| 63 | [riskparity.py](https://github.com/dppalomar/riskparity.py) | fast and scalable design of risk parity portfolios with TensorFlow 2.0 | [dppalomar/riskparity.py](https://github.com/dppalomar/riskparity.py) | ★ 318 |
| 64 | [rqalpha](https://github.com/ricequant/rqalpha) | A extendable, replaceable Python algorithmic backtest && trading framework supporting multiple securities. | [ricequant/rqalpha](https://github.com/ricequant/rqalpha) | ★ 6,241 |
| 65 | [rust_bt](https://github.com/jensnesten/rust_bt) | A high performance, low-latency backtesting engine for testing quantitative trading strategies on historical and live data in Rust. | [jensnesten/rust_bt](https://github.com/jensnesten/rust_bt) | ★ 57 |
| 66 | [SimpleFunctions](https://github.com/spfunctions/simplefunctions-cli) | Prediction market intelligence CLI for Kalshi and Polymarket: causal thesis models, edge detection, 24/7 orderbook monitoring, and trade execution. MCP server for AI agent integration. | [spfunctions/simplefunctions-cli](https://github.com/spfunctions/simplefunctions-cli) | — |
| 67 | [skfolio](https://github.com/skfolio/skfolio) | Python library for portfolio optimization built on top of scikit-learn. It provides a unified interface and sklearn compatible tools to build, tune and cross-validate portfolio models. | [skfolio/skfolio](https://github.com/skfolio/skfolio) | ★ 1,906 |
| 68 | [Stock-Prediction-Models](https://github.com/huseinzol05/Stock-Prediction-Models) | Gathers machine learning and deep learning models for Stock forecasting including trading bots and simulations. | [huseinzol05/Stock-Prediction-Models](https://github.com/huseinzol05/Stock-Prediction-Models) | ★ 9,261 |
| 69 | [StrateQueue](https://github.com/StrateQueue/StrateQueue) | An open‑source, broker‑agnostic Python library that lets you seamlessly deploy strategies from any major backtesting engine to live (or paper) trading with zero code changes and built‑in safety controls. | [StrateQueue/StrateQueue](https://github.com/StrateQueue/StrateQueue) | ★ 170 |
| 70 | [ta](https://github.com/bukosabino/ta) | Technical Analysis Library using Pandas (Python) | [bukosabino/ta](https://github.com/bukosabino/ta) | ★ 4,914 |
| 71 | [TA-Lib](https://github.com/mrjbq7/ta-lib) | Python wrapper for TA-Lib (<http://ta-lib.org/>). | [mrjbq7/ta-lib](https://github.com/mrjbq7/ta-lib) | ★ 11,800 |
| 72 | [tda-api](https://github.com/alexgolec/tda-api) | Gather data and trade equities, options, and ETFs via TDAmeritrade. | [alexgolec/tda-api](https://github.com/alexgolec/tda-api) | ★ 1,313 |
| 73 | [Trading Strategy](https://github.com/tradingstrategy-ai/getting-started) | TradingStrategy.ai is a market data, backtesting, live trading and investor management framework for decentralised finance | [tradingstrategy-ai/getting-started](https://github.com/tradingstrategy-ai/getting-started) | ★ 207 |
| 74 | [tradingWithPython](https://pypi.org/project/tradingWithPython/) | A collection of functions and classes for Quantitative trading. | [sjev/tradingWithPython](https://github.com/sjev/tradingWithPython) | — |
| 75 | [TuneTA](https://github.com/jmrichardson/tuneta) | TuneTA optimizes technical indicators using a distance correlation measure to a user defined target feature such as next day return. | [jmrichardson/tuneta](https://github.com/jmrichardson/tuneta) | ★ 457 |
| 76 | [VARRD](https://github.com/augiemazza/varrd) | AI-powered trading edge discovery platform that validates trading ideas with event studies, statistical tests, and real market data. Web app, MCP server, CLI, and Python SDK. | [augiemazza/varrd](https://github.com/augiemazza/varrd) | — |
| 77 | [vectorbt](https://github.com/polakowo/vectorbt) | Find your trading edge, using a powerful toolkit for backtesting, algorithmic trading, and research. | [polakowo/vectorbt](https://github.com/polakowo/vectorbt) | ★ 6,937 |
| 78 | [vnpy](https://github.com/vnpy/vnpy) | VeighNa is a Python-based open source quantitative trading system development framework. | [vnpy/vnpy](https://github.com/vnpy/vnpy) | ★ 38,102 |
| 79 | [YABTE](https://github.com/bsdz/yabte) | Yet Another (Python) BackTesting Engine. | [bsdz/yabte](https://github.com/bsdz/yabte) | ★ 6 |
| 80 | [zipline](https://github.com/quantopian/zipline) | Pythonic algorithmic trading library. | [quantopian/zipline](https://github.com/quantopian/zipline) | ★ 19,531 |
| 81 | [zipline-extensions](https://github.com/quantrocket-llc/zipline-extensions) | Zipline extensions and adapters for QuantRocket. | [quantrocket-llc/zipline-extensions](https://github.com/quantrocket-llc/zipline-extensions) | ★ 18 |
| 82 | [zipline-reloaded](https://github.com/stefan-jansen/zipline-reloaded) | Zipline, a Pythonic Algorithmic Trading Library. | [stefan-jansen/zipline-reloaded](https://github.com/stefan-jansen/zipline-reloaded) | ★ 1,687 |
| 83 | [zvt](https://github.com/zvtvz/zvt) | the project using sql, pandas to provide an uniform and extendable way to record data, computing factors, select securities, backtesting, realtime trading and it could show all of them in clearly charts in realtime. | [zvtvz/zvt](https://github.com/zvtvz/zvt) | ★ 4,032 |

### Visualization

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [D-Tale](https://github.com/man-group/dtale) | Visualizer for pandas dataframes and xarray datasets. | [man-group/dtale](https://github.com/man-group/dtale) | ★ 5,077 |
| 2 | [finplot](https://github.com/highfestiva/finplot) | Performant and effortless finance plotting for Python. | [highfestiva/finplot](https://github.com/highfestiva/finplot) | ★ 1,128 |
| 3 | [finvizfinance](https://github.com/lit26/finvizfinance) | Finviz analysis python library. | [lit26/finvizfinance](https://github.com/lit26/finvizfinance) | ★ 1,271 |
| 4 | [market-analy](https://github.com/maread99/market_analy) | Analysis and interactive charting using [market-prices](https://github.com/maread99/market_prices) and bqplot. | [maread99/market_analy](https://github.com/maread99/market_analy) | ★ 75 |
| 5 | [mplfinance](https://github.com/matplotlib/mplfinance) | matplotlib utilities for the visualization, and visual analysis, of financial data. | [matplotlib/mplfinance](https://github.com/matplotlib/mplfinance) | ★ 4,322 |
| 6 | [QuantInvestStrats](https://github.com/ArturSepp/QuantInvestStrats) | Quantitative Investment Strategies (QIS) package implements Python analytics for visualisation of financial data, performance reporting, analysis of quantitative strategies. | [ArturSepp/QuantInvestStrats](https://github.com/ArturSepp/QuantInvestStrats) | ★ 520 |

## R

### Backtesting

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [quantstrat](https://github.com/braverock/quantstrat) | Transaction-oriented infrastructure for constructing trading systems and simulation. Provides support for multi-asset class and multi-currency portfolios for backtesting and other financial research. | [braverock/quantstrat](https://github.com/braverock/quantstrat) | ★ 301 |

### Calendars

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [bizdays](https://github.com/wilsonfreitas/R-bizdays) | Business days calculations and utilities | [wilsonfreitas/R-bizdays](https://github.com/wilsonfreitas/R-bizdays) | ★ 57 |
| 2 | [timeDate](https://cran.r-project.org/web/packages/timeDate/index.html) | Chronological and Calendar Objects | [cran/timeDate](https://github.com/cran/timeDate) | — |

### Data Sources

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [GetHFData](https://github.com/msperlin/GetHFData) | Downloads and aggregates high frequency trading data for Brazilian instruments directly from Bovespa ftp site. | [msperlin/GetHFData](https://github.com/msperlin/GetHFData) | ★ 41 |
| 2 | [GetTDData](https://github.com/msperlin/GetTDData) | Downloads and aggregates data for Brazilian government issued bonds directly from the website of Tesouro Direto. | [msperlin/GetTDData](https://github.com/msperlin/GetTDData) | ★ 26 |
| 3 | [IBrokers](https://cran.r-project.org/web/packages/IBrokers/index.html) | Provides native R access to Interactive Brokers Trader Workstation API. | [joshuaulrich/IBrokers](https://github.com/joshuaulrich/IBrokers) | — |
| 4 | [Quandl](https://www.quandl.com/tools/r) | Get Financial Data Directly Into R. | [quandl/quandl-r](https://github.com/quandl/quandl-r) | — |
| 5 | [rb3](https://github.com/ropensci/rb3) | A bunch of downloaders and parsers for data delivered from B3. | [ropensci/rb3](https://github.com/ropensci/rb3) | ★ 91 |
| 6 | [rbcb](https://github.com/wilsonfreitas/rbcb) | R interface to Brazilian Central Bank web services. | [wilsonfreitas/rbcb](https://github.com/wilsonfreitas/rbcb) | ★ 99 |
| 7 | [Rbitcoin](https://github.com/jangorecki/Rbitcoin) | Unified markets API interface (bitstamp, kraken, btce, bitmarket). | [jangorecki/Rbitcoin](https://github.com/jangorecki/Rbitcoin) | ★ 57 |
| 8 | [Rblpapi](https://github.com/Rblp/Rblpapi) | An R Interface to 'Bloomberg' is provided via the 'Blp API'. | [Rblp/Rblpapi](https://github.com/Rblp/Rblpapi) | ★ 175 |
| 9 | [Reddit WallstreetBets API](https://dashboard.nbshare.io/apps/reddit/api/) | Provides daily top 50 stocks from reddit (subreddit) Wallstreetbets and their sentiments via the API. | — | — |
| 10 | [simfinapi](https://github.com/matthiasgomolka/simfinapi) | Makes 'SimFin' data (<https://simfin.com/>) easily accessible in R. | [matthiasgomolka/simfinapi](https://github.com/matthiasgomolka/simfinapi) | ★ 21 |
| 11 | [td](https://github.com/eddelbuettel/td) | Interfaces the 'twelvedata' API for stocks and (digital and standard) currencies. | [eddelbuettel/td](https://github.com/eddelbuettel/td) | ★ 18 |
| 12 | [tidyfinance](https://github.com/tidy-finance/r-tidyfinance) | Tidy Finance helper functions to download financial data and process the raw data into a structured Format (tidy data), including | [tidy-finance/r-tidyfinance](https://github.com/tidy-finance/r-tidyfinance) | ★ 20 |

### Factor Analysis

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [Expected Returns](https://github.com/JustinMShea/ExpectedReturns) | Solutions for enhancing portfolio diversification and replications of seminal papers with R, most of which are discussed in one of the best investment references of the recent decade, Expected Returns: An Investors Guide to Harvesting Market Rewards by Antti Ilmanen. | [JustinMShea/ExpectedReturns](https://github.com/JustinMShea/ExpectedReturns) | ★ 56 |
| 2 | [FactorAnalytics](https://github.com/braverock/FactorAnalytics) | The FactorAnalytics package contains fitting and analysis methods for the three main types of factor models used in conjunction with portfolio construction, optimization and risk management, namely fundamental factor models, time series factor models and statistical factor models. | [braverock/FactorAnalytics](https://github.com/braverock/FactorAnalytics) | ★ 85 |

### Financial Instruments and Pricing

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [AmericanCallOpt](https://cran.r-project.org/web/packages/AmericanCallOpt/index.html) | This package includes pricing function for selected American call options with underlying assets that generate payouts. | [cran/AmericanCallOpt](https://github.com/cran/AmericanCallOpt) | — |
| 2 | [covFactorModel](https://github.com/dppalomar/covFactorModel) | Covariance matrix estimation via factor models. | [dppalomar/covFactorModel](https://github.com/dppalomar/covFactorModel) | ★ 38 |
| 3 | [credule](https://github.com/blenezet/credule) | Credit Default Swap Functions. | [blenezet/credule](https://github.com/blenezet/credule) | ★ 7 |
| 4 | [derivmkts](https://cran.r-project.org/web/packages/derivmkts/index.html) | Functions and R Code to Accompany Derivatives Markets. | [rmcd1024/derivmkts](https://github.com/rmcd1024/derivmkts) | — |
| 5 | [fAsianOptions](https://cran.r-project.org/web/packages/fAsianOptions/index.html) | EBM and Asian Option Valuation. | [cran/fAsianOptions](https://github.com/cran/fAsianOptions) | — |
| 6 | [fAssets](https://cran.r-project.org/web/packages/fAssets/index.html) | Analysing and Modelling Financial Assets. | [cran/fAssets](https://github.com/cran/fAssets) | — |
| 7 | [fBasics](https://cran.r-project.org/web/packages/fBasics/index.html) | Markets and Basic Statistics. | [cran/fBasics](https://github.com/cran/fBasics) | — |
| 8 | [fBonds](https://cran.r-project.org/web/packages/fBonds/index.html) | Bonds and Interest Rate Models. | [cran/fBonds](https://github.com/cran/fBonds) | — |
| 9 | [fExoticOptions](https://cran.r-project.org/web/packages/fExoticOptions/index.html) | Exotic Option Valuation. | [cran/fExoticOptions](https://github.com/cran/fExoticOptions) | — |
| 10 | [FinCal](https://github.com/felixfan/FinCal) | Package for time value of money calculation, time series analysis and computational finance. | [felixfan/FinCal](https://github.com/felixfan/FinCal) | ★ 24 |
| 11 | [fmbasics](https://github.com/imanuelcostigan/fmbasics) | Financial Market Building Blocks. | [imanuelcostigan/fmbasics](https://github.com/imanuelcostigan/fmbasics) | ★ 12 |
| 12 | [fOptions](https://cran.r-project.org/web/packages/fOptions/index.html) | Pricing and Evaluating Basic Options. | [cran/fOptions](https://github.com/cran/fOptions) | — |
| 13 | [fPortfolio](https://cran.r-project.org/web/packages/fPortfolio/index.html) | Portfolio Selection and Optimization. | [cran/fPortfolio](https://github.com/cran/fPortfolio) | — |
| 14 | [LSMonteCarlo](https://cran.r-project.org/web/packages/LSMonteCarlo/index.html) | American options pricing with Least Squares Monte Carlo method. | [cran/LSMonteCarlo](https://github.com/cran/LSMonteCarlo) | — |
| 15 | [OptHedging](https://cran.r-project.org/web/packages/OptHedging/index.html) | Estimation of value and hedging strategy of call and put options. | [cran/OptHedging](https://github.com/cran/OptHedging) | — |
| 16 | [OptionPricing](https://cran.r-project.org/web/packages/OptionPricing/index.html) | Option Pricing with Efficient Simulation Algorithms. | [cran/OptionPricing](https://github.com/cran/OptionPricing) | — |
| 17 | [options.studies](https://github.com/taylorizing/options.studies) | options trading studies functions for use with options.data package and shiny. | [taylorizing/options.studies](https://github.com/taylorizing/options.studies) | ★ 6 |
| 18 | [portfolio](https://github.com/dgerlanc/portfolio) | Analysing equity portfolios. | [dgerlanc/portfolio](https://github.com/dgerlanc/portfolio) | ★ 17 |
| 19 | [PortfolioAnalytics](https://github.com/braverock/PortfolioAnalytics) | Portfolio Analysis, Including Numerical Methods for Optimizationof Portfolios. | [braverock/PortfolioAnalytics](https://github.com/braverock/PortfolioAnalytics) | ★ 98 |
| 20 | [quantmod](https://cran.r-project.org/web/packages/quantmod/index.html) | Quantitative Financial Modelling Framework. | [joshuaulrich/quantmod](https://github.com/joshuaulrich/quantmod) | — |
| 21 | [R-fixedincome](https://github.com/wilsonfreitas/R-fixedincome) | Fixed income tools for R. | [wilsonfreitas/R-fixedincome](https://github.com/wilsonfreitas/R-fixedincome) | ★ 64 |
| 22 | [r-quant](https://github.com/artyyouth/r-quant) | R code for quantitative analysis in finance. | [artyyouth/r-quant](https://github.com/artyyouth/r-quant) | ★ 34 |
| 23 | [riskParityPortfolio](https://github.com/dppalomar/riskParityPortfolio) | Blazingly fast design of risk parity portfolios. | [dppalomar/riskParityPortfolio](https://github.com/dppalomar/riskParityPortfolio) | ★ 121 |
| 24 | [Rmetrics](https://www.rmetrics.org) | The premier open source software solution for teaching and training quantitative finance. | — | — |
| 25 | [RND](https://cran.r-project.org/web/packages/RND/index.html) | Risk Neutral Density Extraction Package. | [cran/RND](https://github.com/cran/RND) | — |
| 26 | [RQuantLib](https://github.com/eddelbuettel/rquantlib) | RQuantLib connects GNU R with QuantLib. | [eddelbuettel/rquantlib](https://github.com/eddelbuettel/rquantlib) | ★ 131 |
| 27 | [sde](https://cran.r-project.org/web/packages/sde/index.html) | Simulation and Inference for Stochastic Differential Equations. | [cran/sde](https://github.com/cran/sde) | — |
| 28 | [SmithWilsonYieldCurve](https://cran.r-project.org/web/packages/SmithWilsonYieldCurve/index.html) | Constructs a yield curve by the Smith-Wilson method from a table of LIBOR and SWAP rates. | [cran/SmithWilsonYieldCurve](https://github.com/cran/SmithWilsonYieldCurve) | — |
| 29 | [sparseIndexTracking](https://github.com/dppalomar/sparseIndexTracking) | Portfolio design to track an index. | [dppalomar/sparseIndexTracking](https://github.com/dppalomar/sparseIndexTracking) | ★ 59 |
| 30 | [tvm](https://cran.r-project.org/web/packages/tvm/index.html) | Time Value of Money Functions. | [cran/tvm](https://github.com/cran/tvm) | — |
| 31 | [VarSwapPrice](https://cran.r-project.org/web/packages/VarSwapPrice/index.html) | Pricing a variance swap on an equity index. | — | — |
| 32 | [ycinterextra](https://cran.r-project.org/web/packages/ycinterextra/index.html) | Yield curve or zero-coupon prices interpolation and extrapolation. | [Techtonique/ycinterextra](https://github.com/Techtonique/ycinterextra) | — |
| 33 | [YieldCurve](https://cran.r-project.org/web/packages/YieldCurve/index.html) | Modelling and estimation of the yield curve. | [cran/YieldCurve](https://github.com/cran/YieldCurve) | — |

### Numerical Libraries & Data Structures

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [data.table](https://github.com/Rdatatable/data.table) | Extension of data.frame: Fast aggregation of large data (e.g. 100GB in RAM), fast ordered joins, fast add/modify/delete of columns by group using no copies at all, list columns and a fast file reader (fread). Offers a natural and flexible syntax, for faster development. | [Rdatatable/data.table](https://github.com/Rdatatable/data.table) | ★ 3,869 |
| 2 | [sparseEigen](https://github.com/dppalomar/sparseEigen) | Sparse principal component analysis. | [dppalomar/sparseEigen](https://github.com/dppalomar/sparseEigen) | ★ 12 |
| 3 | [tfplot](https://cran.r-project.org/web/packages/tfplot/index.html) | Utilities for simple manipulation and quick plotting of time series data. | [cran/tfplot](https://github.com/cran/tfplot) | — |
| 4 | [tframe](https://cran.r-project.org/web/packages/tframe/index.html) | A kernel of functions for programming time series methods in a way that is relatively independently of the representation of time. | [cran/tframe](https://github.com/cran/tframe) | — |
| 5 | [tis](https://cran.r-project.org/web/packages/tis/index.html) | Functions and S3 classes for time indexes and time indexed series, which are compatible with FAME frequencies. | [cran/tis](https://github.com/cran/tis) | — |
| 6 | [TSdbi](http://tsdbi.r-forge.r-project.org/) | Provides a common interface to time series databases. | [cran/TSdbi](https://github.com/cran/TSdbi) | — |
| 7 | [tseries](https://cran.r-project.org/web/packages/tseries/index.html) | Time Series Analysis and Computational Finance. | [cran/tseries](https://github.com/cran/tseries) | — |
| 8 | [xts](https://github.com/joshuaulrich/xts) | eXtensible Time Series: Provide for uniform handling of R's different time-based data classes by extending zoo, maximizing native format information preservation and allowing for user level customization and extension, while simplifying cross-class interoperability. | [joshuaulrich/xts](https://github.com/joshuaulrich/xts) | ★ 222 |
| 9 | [zoo](https://cran.r-project.org/web/packages/zoo/index.html) | S3 Infrastructure for Regular and Irregular Time Series (Z's Ordered Observations). | [cran/zoo](https://github.com/cran/zoo) | — |

### Risk Analysis

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [PerformanceAnalytics](https://github.com/braverock/PerformanceAnalytics) | Econometric tools for performance and risk analysis. | [braverock/PerformanceAnalytics](https://github.com/braverock/PerformanceAnalytics) | ★ 235 |

### Time Series

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [fGarch](https://cran.r-project.org/web/packages/fGarch/index.html) | Rmetrics - Autoregressive Conditional Heteroskedastic Modelling. | [cran/fGarch](https://github.com/cran/fGarch) | — |
| 2 | [garchmodels](https://github.com/AlbertoAlmuinha/garchmodels) | A parsnip backend for GARCH models. | [AlbertoAlmuinha/garchmodels](https://github.com/AlbertoAlmuinha/garchmodels) | ★ 35 |
| 3 | [matrixprofile](https://github.com/matrix-profile-foundation/matrixprofile) | Time series data mining library built on top of the novel Matrix Profile data structure and algorithms. | [matrix-profile-foundation/matrixprofile](https://github.com/matrix-profile-foundation/matrixprofile) | ★ 387 |
| 4 | [rmgarch](https://github.com/alexiosg/rmgarch) | Multivariate GARCH Models. | [alexiosg/rmgarch](https://github.com/alexiosg/rmgarch) | ★ 17 |
| 5 | [rugarch](https://github.com/alexiosg/rugarch) | Univariate GARCH Models. | [alexiosg/rugarch](https://github.com/alexiosg/rugarch) | ★ 31 |
| 6 | [tibbletime](https://github.com/business-science/tibbletime) | Built on top of the tidyverse, tibbletime is an extension that allows for the creation of time aware tibbles through the setting of a time index. | [business-science/tibbletime](https://github.com/business-science/tibbletime) | ★ 177 |
| 7 | [tidypredict](https://github.com/edgararuiz/tidypredict) | Run predictions inside the database <https://tidypredict.netlify.com/>. | [edgararuiz/tidypredict](https://github.com/edgararuiz/tidypredict) | ★ 3 |
| 8 | [tidyquant](https://github.com/business-science/tidyquant) | Bringing financial analysis to the tidyverse. | [business-science/tidyquant](https://github.com/business-science/tidyquant) | ★ 900 |
| 9 | [timeSeries](https://cran.r-project.org/web/packages/timeSeries/index.html) | Rmetrics - Financial Time Series Objects. | [cran/timeSeries](https://github.com/cran/timeSeries) | — |
| 10 | [timetk](https://github.com/business-science/timetk) | A toolkit for working with time series in R. | [business-science/timetk](https://github.com/business-science/timetk) | ★ 639 |
| 11 | [tseries](https://cran.r-project.org/web/packages/tseries/index.html) | Time Series Analysis and Computational Finance. | [cran/tseries](https://github.com/cran/tseries) | — |

### Trading

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [backtest](https://cran.r-project.org/web/packages/backtest/index.html) | Exploring Portfolio-Based Conjectures About Financial Instruments. | [cran/backtest](https://github.com/cran/backtest) | — |
| 2 | [blotter](https://github.com/braverock/blotter) | Transaction infrastructure for defining instruments, transactions, portfolios and accounts for trading systems and simulation. Provides portfolio support for multi-asset class and multi-currency portfolios. Actively maintained and developed. | [braverock/blotter](https://github.com/braverock/blotter) | ★ 118 |
| 3 | [pa](https://cran.r-project.org/web/packages/pa/index.html) | Performance Attribution for Equity Portfolios. | [yl2/pa](https://github.com/yl2/pa) | — |
| 4 | [QuantTools](https://quanttools.bitbucket.io/_site/index.html) | Enhanced Quantitative Trading Modelling. | [cran/QuantTools](https://github.com/cran/QuantTools) | — |
| 5 | [TTR](https://github.com/joshuaulrich/TTR) | Technical Trading Rules. | [joshuaulrich/TTR](https://github.com/joshuaulrich/TTR) | ★ 342 |

## Julia

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [CcyConv](https://github.com/bhftbootcamp/CcyConv.jl) | Currency conversion library for Julia | [bhftbootcamp/CcyConv.jl](https://github.com/bhftbootcamp/CcyConv.jl) | ★ 25 |
| 2 | [CryptoExchangeAPIs.jl](https://github.com/bhftbootcamp/CryptoExchangeAPIs.jl) | A Julia library for cryptocurrency exchange APIs | [bhftbootcamp/CryptoExchangeAPIs.jl](https://github.com/bhftbootcamp/CryptoExchangeAPIs.jl) | ★ 30 |
| 3 | [DataFrames.jl](https://github.com/JuliaData/DataFrames.jl) | In-memory tabular data in Julia | [JuliaData/DataFrames.jl](https://github.com/JuliaData/DataFrames.jl) | ★ 1,818 |
| 4 | [Fastback.jl](https://github.com/rbeeli/Fastback.jl) | Blazing fast Julia backtester. | [rbeeli/Fastback.jl](https://github.com/rbeeli/Fastback.jl) | ★ 19 |
| 5 | [Indicators.jl](https://github.com/dysonance/Indicators.jl) | Financial market technical analysis & indicators on top of Temporal. | [dysonance/Indicators.jl](https://github.com/dysonance/Indicators.jl) | ★ 227 |
| 6 | [Ito.jl](https://github.com/aviks/Ito.jl) | A Julia package for quantitative finance. | [aviks/Ito.jl](https://github.com/aviks/Ito.jl) | ★ 39 |
| 7 | [LightweightCharts.jl](https://github.com/bhftbootcamp/LightweightCharts.jl) | Julia wrapper for Lightweight Charts™ by TradingView. | [bhftbootcamp/LightweightCharts.jl](https://github.com/bhftbootcamp/LightweightCharts.jl) | ★ 48 |
| 8 | [Lucky.jl](https://github.com/oliviermilla/Lucky.jl) | Modular, asynchronous trading engine in pure Julia. | [oliviermilla/Lucky.jl](https://github.com/oliviermilla/Lucky.jl) | ★ 26 |
| 9 | [MarketData.jl](https://github.com/JuliaQuant/MarketData.jl) | Time series market data. | [JuliaQuant/MarketData.jl](https://github.com/JuliaQuant/MarketData.jl) | ★ 162 |
| 10 | [MarketTechnicals.jl](https://github.com/JuliaQuant/MarketTechnicals.jl) | Technical analysis of financial time series on top of TimeSeries. | [JuliaQuant/MarketTechnicals.jl](https://github.com/JuliaQuant/MarketTechnicals.jl) | ★ 129 |
| 11 | [Miletus.jl](https://github.com/JuliaComputing/Miletus.jl) | A financial contract definition, modeling language, and valuation framework. | [JuliaComputing/Miletus.jl](https://github.com/JuliaComputing/Miletus.jl) | ★ 90 |
| 12 | [OnlineResamplers.jl](https://github.com/femtotrader/OnlineResamplers.jl) | High-performance Julia package for real-time resampling of financial market data. | [femtotrader/OnlineResamplers.jl](https://github.com/femtotrader/OnlineResamplers.jl) | ★ 2 |
| 13 | [OnlineTechnicalIndicators](https://github.com/femtotrader/OnlinePortfolioAnalytics.jl) | A Julia quantitative portfolio analytics (risk / performance) via online algorithms. | [femtotrader/OnlinePortfolioAnalytics.jl](https://github.com/femtotrader/OnlinePortfolioAnalytics.jl) | ★ 13 |
| 14 | [OnlineTechnicalIndicators.jl](https://github.com/femtotrader/OnlineTechnicalIndicators.jl) | Julia Technical Analysis Indicators via online algorithms. | [femtotrader/OnlineTechnicalIndicators.jl](https://github.com/femtotrader/OnlineTechnicalIndicators.jl) | ★ 33 |
| 15 | [QuantLib.jl](https://github.com/pazzo83/QuantLib.jl) | Quantlib implementation in pure Julia. | [pazzo83/QuantLib.jl](https://github.com/pazzo83/QuantLib.jl) | ★ 143 |
| 16 | [RiskPerf.jl](https://github.com/rbeeli/RiskPerf.jl) | Quantitative risk and performance analysis package for financial time series powered by the Julia language. | [rbeeli/RiskPerf.jl](https://github.com/rbeeli/RiskPerf.jl) | ★ 15 |
| 17 | [Strategems.jl](https://github.com/dysonance/Strategems.jl) | Quantitative systematic trading strategy development and backtesting. | [dysonance/Strategems.jl](https://github.com/dysonance/Strategems.jl) | ★ 167 |
| 18 | [TALib.jl](https://github.com/femtotrader/TALib.jl) | A Julia wrapper for TA-Lib. | [femtotrader/TALib.jl](https://github.com/femtotrader/TALib.jl) | ★ 52 |
| 19 | [TechnicalIndicatorCharts.jl](https://github.com/g-gundam/TechnicalIndicatorCharts.jl) | Visualize OnlineTechnicalIndicators.jl using LightweightCharts.jl. | [g-gundam/TechnicalIndicatorCharts.jl](https://github.com/g-gundam/TechnicalIndicatorCharts.jl) | ★ 6 |
| 20 | [Temporal.jl](https://github.com/dysonance/Temporal.jl) | Flexible and efficient time series class & methods. | [dysonance/Temporal.jl](https://github.com/dysonance/Temporal.jl) | ★ 101 |
| 21 | [TimeArrays.jl](https://github.com/bhftbootcamp/TimeArrays.jl) | Time series handling for Julia | [bhftbootcamp/TimeArrays.jl](https://github.com/bhftbootcamp/TimeArrays.jl) | ★ 38 |
| 22 | [TimeFrames.jl](https://github.com/femtotrader/TimeFrames.jl) | A Julia library that defines TimeFrame (essentially for resampling TimeSeries). | [femtotrader/TimeFrames.jl](https://github.com/femtotrader/TimeFrames.jl) | ★ 4 |
| 23 | [TimeSeries.jl](https://github.com/JuliaStats/TimeSeries.jl) | Time series toolkit for Julia. | [JuliaStats/TimeSeries.jl](https://github.com/JuliaStats/TimeSeries.jl) | ★ 367 |
| 24 | [TSFrames.jl](https://github.com/xKDR/TSFrames.jl) | Handle timeseries data on top of the powerful and mature DataFrames.jl | [xKDR/TSFrames.jl](https://github.com/xKDR/TSFrames.jl) | ★ 100 |

## Rust

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [Barter](https://github.com/barter-rs/barter-rs) | Open-source Rust framework for building event-driven live-trading & backtesting systems | [barter-rs/barter-rs](https://github.com/barter-rs/barter-rs) | ★ 2,019 |
| 2 | [fin-primitives](https://github.com/Mattbusel/fin-primitives) | Financial market primitives in Rust: BTreeMap order book, OHLCV aggregation, SMA/EMA/RSI indicators, position ledger with PnL, and composable risk monitor. | [Mattbusel/fin-primitives](https://github.com/Mattbusel/fin-primitives) | — |
| 3 | [fin-stream](https://github.com/Mattbusel/fin-stream) | Real-time market data streaming in Rust: lock-free SPSC ring buffer, 100K+ ticks/second ingestion, and multi-timeframe OHLCV construction. | [Mattbusel/fin-stream](https://github.com/Mattbusel/fin-stream) | — |
| 4 | [finalytics](https://github.com/Nnamdi-sys/finalytics) | A rust library for financial data analysis. | [Nnamdi-sys/finalytics](https://github.com/Nnamdi-sys/finalytics) | ★ 67 |
| 5 | [LFEST](https://github.com/MathisWellmann/lfest-rs) | Simulated perpetual futures exchange to trade your strategy against. | [MathisWellmann/lfest-rs](https://github.com/MathisWellmann/lfest-rs) | ★ 77 |
| 6 | [QuantMath](https://github.com/MarcusRainbow/QuantMath) | Financial maths library for risk-neutral pricing and risk | [MarcusRainbow/QuantMath](https://github.com/MarcusRainbow/QuantMath) | ★ 401 |
| 7 | [RunMat](https://github.com/runmat-org/runmat) | Rust runtime for MATLAB-syntax array math with automatic CPU/GPU execution and fused kernels for quant simulations. | [runmat-org/runmat](https://github.com/runmat-org/runmat) | ★ 194 |
| 8 | [RustQuant](https://github.com/avhz/RustQuant) | Quantitative finance library written in Rust. | [avhz/RustQuant](https://github.com/avhz/RustQuant) | ★ 1,682 |
| 9 | [SlidingFeatures](https://github.com/MathisWellmann/sliding_features-rs) | Chainable tree-like sliding windows for signal processing and technical analysis. | [MathisWellmann/sliding_features-rs](https://github.com/MathisWellmann/sliding_features-rs) | ★ 72 |
| 10 | [TradeAggregation](https://github.com/MathisWellmann/trade_aggregation-rs) | Aggregate trades into user-defined candles using information driven rules. | [MathisWellmann/trade_aggregation-rs](https://github.com/MathisWellmann/trade_aggregation-rs) | ★ 114 |

## JavaScript

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [ccxt](https://github.com/ccxt/ccxt) | A JavaScript / Python / PHP cryptocurrency trading API with support for more than 100 bitcoin/altcoin exchanges. | [ccxt/ccxt](https://github.com/ccxt/ccxt) | ★ 41,450 |
| 2 | chart-patterns (Discontinued) | Technical analysis library for Market Profile, Volume Profile, Stacked Imbalances and High Volume Node indicators. | — | — |
| 3 | [finance.js](https://github.com/ebradyjobory/finance.js) | A JavaScript library for common financial calculations. | [ebradyjobory/finance.js](https://github.com/ebradyjobory/finance.js) | ★ 1,266 |
| 4 | [Ghostfolio](https://github.com/ghostfolio/ghostfolio) | Wealth management software to keep track of financial assets like stocks, ETFs or cryptocurrencies and make solid, data-driven investment decisions. | [ghostfolio/ghostfolio](https://github.com/ghostfolio/ghostfolio) | ★ 7,971 |
| 5 | [IndicatorTS](https://github.com/cinar/indicatorts) | Indicator is a TypeScript module providing various stock technical analysis indicators, strategies, and a backtest framework for trading. | [cinar/indicatorts](https://github.com/cinar/indicatorts) | ★ 429 |
| 6 | [orderflow](https://github.com/focus1691/orderflow) | Orderflow trade aggregator for building Footprint Candles from exchange websocket data. | [focus1691/orderflow](https://github.com/focus1691/orderflow) | ★ 65 |
| 7 | [PENDAX](https://github.com/CompendiumFi/PENDAX-SDK) | Javascript SDK for Trading/Data API and Websockets for FTX, FTXUS, OKX, Bybit, & More. | [CompendiumFi/PENDAX-SDK](https://github.com/CompendiumFi/PENDAX-SDK) | ★ 48 |
| 8 | [portfolio-allocation](https://github.com/lequant40/portfolio_allocation_js) | PortfolioAllocation is a JavaScript library designed to help constructing financial portfolios made of several assets: bonds, commodities, cryptocurrencies, currencies, exchange traded funds (ETFs), mutual funds, stocks... | [lequant40/portfolio_allocation_js](https://github.com/lequant40/portfolio_allocation_js) | ★ 187 |

### Data Visualization

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [QUANTAXIS_Webkit](https://github.com/yutiansut/QUANTAXIS_Webkit) | An awesome visualization center based on quantaxis. | [yutiansut/QUANTAXIS_Webkit](https://github.com/yutiansut/QUANTAXIS_Webkit) | ★ 37 |

## CPP

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [Hikyuu](https://github.com/fasiondog/hikyuu) | A base on Python/C++ open source high-performance quant framework for faster analysis and backtesting, contains the complete trading system components for reuse and combination. You can use python or c++ freely. | [fasiondog/hikyuu](https://github.com/fasiondog/hikyuu) | ★ 3,050 |
| 2 | [NexusFix](https://github.com/SilverstreamsAI/NexusFix) | C++23 FIX protocol engine with zero-copy parsing and SIMD acceleration, 3x faster than QuickFIX. | [SilverstreamsAI/NexusFix](https://github.com/SilverstreamsAI/NexusFix) | — |
| 3 | [QuantLib](https://github.com/lballabio/QuantLib) | The QuantLib project is aimed at providing a comprehensive software framework for quantitative finance. | [lballabio/QuantLib](https://github.com/lballabio/QuantLib) | ★ 6,886 |
| 4 | [QuantLibRisks](https://github.com/auto-differentiation/QuantLib-Risks-Cpp) | Fast risks with QuantLib in C++ | [auto-differentiation/QuantLib-Risks-Cpp](https://github.com/auto-differentiation/QuantLib-Risks-Cpp) | ★ 38 |
| 5 | [Special-Relativity-in-Financial-Modeling](https://github.com/Mattbusel/Special-Relativity-in-Financial-Modeling) | C++20 implementation of special-relativistic geometry applied to OHLCV data: Lorentz factors, spacetime intervals, Christoffel symbols, and geodesic deviation signals. | [Mattbusel/Special-Relativity-in-Financial-Modeling](https://github.com/Mattbusel/Special-Relativity-in-Financial-Modeling) | — |
| 6 | [TradeFrame](https://github.com/rburkholder/trade-frame) | C++ 17 based framework/library (with sample applications) for testing options based automated trading ideas using DTN IQ real time data feed and Interactive Brokers (TWS API) for trade execution. Comes with built-in [Option Greeks/IV](https://github.com/rburkholder/trade-frame/tree/master/lib/TFOptions) calculation library. | [rburkholder/trade-frame](https://github.com/rburkholder/trade-frame) | ★ 651 |
| 7 | [XAD](https://github.com/auto-differentiation/xad) | Automatic Differentation (AAD) Library | [auto-differentiation/xad](https://github.com/auto-differentiation/xad) | ★ 411 |

## Java

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [DRIP](https://lakshmidrip.github.io/DRIP) | Fixed Income, Asset Allocation, Transaction Cost Analysis, XVA Metrics Libraries. | [lakshmiDRIP/DRIP](https://github.com/lakshmiDRIP/DRIP) | — |
| 2 | [finmath.net](http://finmath.net) | Java library with algorithms and methodologies related to mathematical finance. | [finmath/finmath-lib](https://github.com/finmath/finmath-lib) | — |
| 3 | [JQuantLib](https://github.com/frgomes/jquantlib) | JQuantLib is a free, open-source, comprehensive framework for quantitative finance, written in 100% Java. | [frgomes/jquantlib](https://github.com/frgomes/jquantlib) | ★ 152 |
| 4 | [quantcomponents](https://github.com/lsgro/quantcomponents) | Free Java components for Quantitative Finance and Algorithmic Trading. | [lsgro/quantcomponents](https://github.com/lsgro/quantcomponents) | ★ 169 |
| 5 | [Strata](http://strata.opengamma.io/) | Modern open-source analytics and market risk library designed and written in Java. | [OpenGamma/Strata](https://github.com/OpenGamma/Strata) | — |
| 6 | [ta4j](https://github.com/ta4j/ta4j) | A Java library for technical analysis. | [ta4j/ta4j](https://github.com/ta4j/ta4j) | ★ 2,395 |

## CSharp

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [QuantConnect](https://github.com/QuantConnect/Lean) | Lean Engine is an open-source fully managed C# algorithmic trading engine built for desktop and cloud usage. | [QuantConnect/Lean](https://github.com/QuantConnect/Lean) | ★ 17,984 |
| 2 | [StockSharp](https://github.com/StockSharp/StockSharp) | Algorithmic trading and quantitative trading open source platform to develop trading robots (stock markets, forex, crypto, bitcoins, and options). | [StockSharp/StockSharp](https://github.com/StockSharp/StockSharp) | ★ 9,296 |
| 3 | [TDAmeritrade.DotNetCore](https://github.com/NVentimiglia/TDAmeritrade.DotNetCore) | Free, open-source .NET Client for the TD Ameritrade Trading Platform. Helps developers integrate TD Ameritrade API into custom trading solutions. | [NVentimiglia/TDAmeritrade.DotNetCore](https://github.com/NVentimiglia/TDAmeritrade.DotNetCore) | ★ 56 |

## Elixir/Erlang

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [Prop](https://github.com/fremantle-industries/prop) | An open and opinionated trading platform using productive & familiar open source libraries and tools for strategy research, execution and operation. | [fremantle-industries/prop](https://github.com/fremantle-industries/prop) | ★ 55 |
| 2 | [Tai](https://github.com/fremantle-capital/tai) | Open Source composable, real time, market data and trade execution toolkit. | [fremantle-capital/tai](https://github.com/fremantle-capital/tai) | ★ 493 |
| 3 | [Workbench](https://github.com/fremantle-industries/workbench) | From Idea to Execution - Manage your trading operation across a globally distributed cluster | [fremantle-industries/workbench](https://github.com/fremantle-industries/workbench) | ★ 121 |

## Golang

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [IndicatorGo](https://github.com/cinar/indicator) | IndicatorGo is a Golang module providing various stock technical analysis indicators, strategies, and a backtest framework for trading. | [cinar/indicator](https://github.com/cinar/indicator) | ★ 828 |
| 2 | [Kelp](https://github.com/stellar/kelp) | Kelp is an open-source Golang algorithmic cryptocurrency trading bot that runs on centralized exchanges and Stellar DEX (command-line usage and desktop GUI). | [stellar/kelp](https://github.com/stellar/kelp) | ★ 1,122 |
| 3 | marketstore(Discontinued) | DataFrame Server for Financial Timeseries Data. | — | — |

## Haskell

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [Ffinar](https://github.com/MarcusRainbow/Ffinar) | A financial maths library in Haskell. | [MarcusRainbow/Ffinar](https://github.com/MarcusRainbow/Ffinar) | ★ 5 |
| 2 | [Haxcel](https://github.com/MarcusRainbow/Haxcel) | Excel Addin for Haskell. | [MarcusRainbow/Haxcel](https://github.com/MarcusRainbow/Haxcel) | ★ 37 |
| 3 | [quantfin](https://github.com/boundedvariation/quantfin) | quant finance in pure haskell. | [boundedvariation/quantfin](https://github.com/boundedvariation/quantfin) | ★ 139 |

## Matlab

### Alternatives

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [RunMat](https://runmat.org) | High performance, Open Source, MATLAB syntax runtime. | — | — |

### FrameWorks

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [PROJ_Option_Pricing_Matlab](https://github.com/jkirkby3/PROJ_Option_Pricing_Matlab) | Quant Option Pricing - Exotic/Vanilla: Barrier, Asian, European, American, Parisian, Lookback, Cliquet, Variance Swap, Swing, Forward Starting, Step, Fader | [jkirkby3/PROJ_Option_Pricing_Matlab](https://github.com/jkirkby3/PROJ_Option_Pricing_Matlab) | ★ 208 |
| 2 | [QUANTAXIS](https://github.com/yutiansut/quantaxis) | Integrated Quantitative Toolbox with Matlab. | [yutiansut/quantaxis](https://github.com/yutiansut/quantaxis) | ★ 10,126 |

## Scala

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [QuantScale](https://github.com/choucrifahed/quantscale) | Scala Quantitative Finance Library. | [choucrifahed/quantscale](https://github.com/choucrifahed/quantscale) | ★ 50 |
| 2 | [Scala Quant](https://github.com/frankcash/Scala-Quant) | Scala library for working with stock data from IFTTT recipes or Google Finance. | [frankcash/Scala-Quant](https://github.com/frankcash/Scala-Quant) | ★ 10 |

## Ruby

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [Jiji](https://github.com/unageanu/jiji2) | Open Source Forex algorithmic trading framework using OANDA REST API. | [unageanu/jiji2](https://github.com/unageanu/jiji2) | ★ 249 |

## Reproducing Works, Training & Books

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [101_formulaic_alphas](https://github.com/ram-ki/101_formulaic_alphas) | Implementation of [101 formulaic alphas](https://arxiv.org/ftp/arxiv/papers/1601/1601.00991.pdf) using qstrader. | [ram-ki/101_formulaic_alphas](https://github.com/ram-ki/101_formulaic_alphas) | ★ 45 |
| 2 | [AFML](https://github.com/boyboi86/AFML) | All the answers for exercises from Advances in Financial Machine Learning by Dr Marco Lopez de Parodo. | [boyboi86/AFML](https://github.com/boyboi86/AFML) | ★ 810 |
| 3 | [aiif](https://github.com/yhilpisch/aiif) | Jupyter Notebooks and code for the book Artificial Intelligence in Finance (O'Reilly) by Yves Hilpisch. | [yhilpisch/aiif](https://github.com/yhilpisch/aiif) | ★ 385 |
| 4 | [algorithmic-trading-with-python](https://github.com/chrisconlan/algorithmic-trading-with-python) | Source code for Algorithmic Trading with Python (2020) by Chris Conlan. | [chrisconlan/algorithmic-trading-with-python](https://github.com/chrisconlan/algorithmic-trading-with-python) | ★ 3,262 |
| 5 | [AlgoTradingLib](https://github.com/usdaud/algotradinglib.github.io) | A catalog of algorithmic trading libraries, frameworks, strategies, and educational materials. | [usdaud/algotradinglib.github.io](https://github.com/usdaud/algotradinglib.github.io) | ★ 28 |
| 6 | [Auto-Differentiation Website](https://auto-differentiation.github.io/) | Background and  resources on Automatic Differentiation (AD) / Adjoint Algorithmic Differentitation (AAD). | — | — |
| 7 | [Autoencoder-Asset-Pricing-Models](https://github.com/RichardS0268/Autoencoder-Asset-Pricing-Models) | Reimplementation of Autoencoder Asset Pricing Models ([GKX, 2019](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3335536)). | [RichardS0268/Autoencoder-Asset-Pricing-Models](https://github.com/RichardS0268/Autoencoder-Asset-Pricing-Models) | ★ 140 |
| 8 | [awesome-sec-filings](https://github.com/vibeyclaw/awesome-sec-filings) | A curated list of tools, data sources, libraries, and resources for working with SEC filings (13F, 10-K, 10-Q, 8-K). | [vibeyclaw/awesome-sec-filings](https://github.com/vibeyclaw/awesome-sec-filings) | — |
| 9 | [book_irds3](https://github.com/attack68/book_irds3) | Code repository for Pricing and Trading Interest Rate Derivatives. | [attack68/book_irds3](https://github.com/attack68/book_irds3) | ★ 114 |
| 10 | [Computational-Finance-Course](https://github.com/LechGrzelak/Computational-Finance-Course) | Materials for the course of Computational Finance. | [LechGrzelak/Computational-Finance-Course](https://github.com/LechGrzelak/Computational-Finance-Course) | ★ 490 |
| 11 | [CONVEXFI](https://github.com/convexfi) | Official GitHub organization for the convex research group at HKUST focused on portfolio optimization. | [convexfi](https://github.com/convexfi) | — |
| 12 | [dawp](https://github.com/yhilpisch/dawp) | Jupyter Notebooks and code for Derivatives Analytics with Python (Wiley Finance) by Yves Hilpisch. | [yhilpisch/dawp](https://github.com/yhilpisch/dawp) | ★ 633 |
| 13 | [Deep Learning Machine Learning Stock](https://github.com/LastAncientOne/Deep-Learning-Machine-Learning-Stock) | Deep Learning and Machine Learning stocks represent a promising long-term or short-term opportunity for investors and traders. | [LastAncientOne/Deep-Learning-Machine-Learning-Stock](https://github.com/LastAncientOne/Deep-Learning-Machine-Learning-Stock) | ★ 1,721 |
| 14 | [Derman Papers](https://github.com/MarcosCarreira/DermanPapers) | Notebooks that replicate original quantitative finance papers from Emanuel Derman. | [MarcosCarreira/DermanPapers](https://github.com/MarcosCarreira/DermanPapers) | ★ 506 |
| 15 | [Differential Machine Learning and Axes that matter by Brian Huge and Antoine Savine](https://github.com/differential-machine-learning/notebooks) | Implement, demonstrate, reproduce and extend the results of the Risk articles 'Differential Machine Learning' (2020) and 'PCA with a Difference' (2021) by Huge and Savine, and cover implementation details left out from the papers. | [differential-machine-learning/notebooks](https://github.com/differential-machine-learning/notebooks) | ★ 148 |
| 16 | [dx](https://github.com/yhilpisch/dx) | DX Analytics \| Financial and Derivatives Analytics with Python. | [yhilpisch/dx](https://github.com/yhilpisch/dx) | ★ 767 |
| 17 | [fecon235](https://github.com/rsvp/fecon235) | Open source project for software tools in financial economics. Many jupyter notebook to verify theoretical ideas and practical methods interactively. | [rsvp/fecon235](https://github.com/rsvp/fecon235) | ★ 1,255 |
| 18 | [Finance](https://github.com/shashankvemuri/Finance) | 150+ quantitative finance Python programs to help you gather, manipulate, and analyze stock market data. | [shashankvemuri/Finance](https://github.com/shashankvemuri/Finance) | ★ 3,703 |
| 19 | [FinanceHub](https://github.com/Finance-Hub/FinanceHub) | Resources for Quantitative Finance | [Finance-Hub/FinanceHub](https://github.com/Finance-Hub/FinanceHub) | ★ 781 |
| 20 | [financialnoob-misc](https://github.com/financialnoob/misc) | Codes from @financialnoob's posts | [financialnoob/misc](https://github.com/financialnoob/misc) | ★ 28 |
| 21 | [frh-fx](https://github.com/ryanmccrickerd/frh-fx) | A python implementation of the fast-reversion Heston model of Mechkov for FX purposes. | [ryanmccrickerd/frh-fx](https://github.com/ryanmccrickerd/frh-fx) | ★ 13 |
| 22 | [Hands-On Machine Learning for Algorithmic Trading](https://github.com/packtpublishing/hands-on-machine-learning-for-algorithmic-trading) | Hands-On Machine Learning for Algorithmic Trading, published by Packt | [packtpublishing/hands-on-machine-learning-for-algorithmic-trading](https://github.com/packtpublishing/hands-on-machine-learning-for-algorithmic-trading) | ★ 1,815 |
| 23 | [IPythonScripts](https://github.com/mgroncki/IPythonScripts) | Tutorials about Quantitative Finance in Python and QuantLib: Pricing, xVAs, Hedging, Portfolio Optimisation, Machine Learning and Deep Learning. | [mgroncki/IPythonScripts](https://github.com/mgroncki/IPythonScripts) | ★ 175 |
| 24 | [Machine Learning Asset Management](https://github.com/firmai/machine-learning-asset-management) | Machine Learning in Asset Management (by @firmai). | [firmai/machine-learning-asset-management](https://github.com/firmai/machine-learning-asset-management) | ★ 1,734 |
| 25 | [Machine-Learning-for-Asset-Managers](https://github.com/emoen/Machine-Learning-for-Asset-Managers) | Implementation of code snippets, exercises and application to live data from Machine Learning for Asset Managers (Elements in Quantitative Finance) written by Prof. Marcos López de Prado. | [emoen/Machine-Learning-for-Asset-Managers](https://github.com/emoen/Machine-Learning-for-Asset-Managers) | ★ 615 |
| 26 | [MEDIUM_NoteBook](https://github.com/cerlymarco/MEDIUM_NoteBook) | Repository containing notebooks of [cerlymarco](https://github.com/cerlymarco)'s posts on Medium. | [cerlymarco/MEDIUM_NoteBook](https://github.com/cerlymarco/MEDIUM_NoteBook) | ★ 2,138 |
| 27 | [MesoSim Options Trading Strategy Library](https://github.com/deltaray-io/strategy-library) | Free and public Options Trading strategy library for MesoSim. | [deltaray-io/strategy-library](https://github.com/deltaray-io/strategy-library) | ★ 20 |
| 28 | [ML_Finance_Codes](https://github.com/mfrdixon/ML_Finance_Codes) | Machine Learning in Finance: From Theory to Practice Book | [mfrdixon/ML_Finance_Codes](https://github.com/mfrdixon/ML_Finance_Codes) | ★ 2,526 |
| 29 | [ML-Quant](https://www.ml-quant.com/) | Top Quant resources like ArXiv (sanity), SSRN, RePec, Journals, Podcasts, Videos, and Blogs. | — | — |
| 30 | [modelos_vol_derivativos](https://github.com/ysaporito/modelos_vol_derivativos) | Modelos de Volatilidade para Derivativos book's Jupyter notebooks | [ysaporito/modelos_vol_derivativos](https://github.com/ysaporito/modelos_vol_derivativos) | ★ 59 |
| 31 | [NMOF](https://github.com/enricoschumann/NMOF) | Functions, examples and data from the first and the second edition of Numerical Methods and Optimization in Finance by M. Gilli, D. Maringer and E. Schumann (2019, ISBN:978-0128150658). | [enricoschumann/NMOF](https://github.com/enricoschumann/NMOF) | ★ 38 |
| 32 | [Portfolio Optimization Book](https://portfoliooptimizationbook.com/) | Prof. Daniel Palomar's Portfolio Optimization Book. | — | — |
| 33 | [py4at](https://github.com/yhilpisch/py4at) | Jupyter Notebooks and code for the book Python for Algorithmic Trading (O'Reilly) by Yves Hilpisch. | [yhilpisch/py4at](https://github.com/yhilpisch/py4at) | ★ 826 |
| 34 | [py4fi2nd](https://github.com/yhilpisch/py4fi2nd) | Jupyter Notebooks and code for Python for Finance (2nd ed., O'Reilly) by Yves Hilpisch. | [yhilpisch/py4fi2nd](https://github.com/yhilpisch/py4fi2nd) | ★ 2,148 |
| 35 | [pysystemtrade_examples](https://github.com/robcarver17/pysystemtrade_examples) | Examples using pysystemtrade for Robert Carver's [blog](http://qoppac.blogspot.com). | [robcarver17/pysystemtrade_examples](https://github.com/robcarver17/pysystemtrade_examples) | ★ 259 |
| 36 | [Python_Option_Pricing](https://github.com/dedwards25/Python_Option_Pricing) | An library to price financial options written in Python. Includes: Black Scholes, Black 76, Implied Volatility, American, European, Asian, Spread Options. | [dedwards25/Python_Option_Pricing](https://github.com/dedwards25/Python_Option_Pricing) | ★ 828 |
| 37 | [Python-for-Finance-Cookbook](https://github.com/PacktPublishing/Python-for-Finance-Cookbook) | Python for Finance Cookbook, published by Packt. | [PacktPublishing/Python-for-Finance-Cookbook](https://github.com/PacktPublishing/Python-for-Finance-Cookbook) | ★ 784 |
| 38 | [python-training](https://github.com/jpmorganchase/python-training) | J.P. Morgan's Python training for business analysts and traders. | [jpmorganchase/python-training](https://github.com/jpmorganchase/python-training) | ★ 12,860 |
| 39 | [quant](https://github.com/paulperry/quant) | Quantitative Finance and Algorithmic Trading exhaust; mostly ipython notebooks based on Quantopian, Zipline, or Pandas. | [paulperry/quant](https://github.com/paulperry/quant) | ★ 405 |
| 40 | [Quant-Finance-With-Python-Code](https://github.com/lingyixu/Quant-Finance-With-Python-Code) | Repo for code examples in Quantitative Finance with Python by Chris Kelliher | [lingyixu/Quant-Finance-With-Python-Code](https://github.com/lingyixu/Quant-Finance-With-Python-Code) | ★ 168 |
| 41 | [QuantEcon](https://quantecon.org/) | Lecture series on economics, finance, econometrics and data science; QuantEcon.py, QuantEcon.jl, notebooks | [QuantEcon/QuantEcon.py](https://github.com/QuantEcon/QuantEcon.py) | — |
| 42 | [QuantFinance](https://github.com/PythonCharmers/QuantFinance) | Training materials in quantitative finance. | [PythonCharmers/QuantFinance](https://github.com/PythonCharmers/QuantFinance) | ★ 605 |
| 43 | [QuantFinanceBook](https://github.com/LechGrzelak/QuantFinanceBook) | Quantitative Finance book. | [LechGrzelak/QuantFinanceBook](https://github.com/LechGrzelak/QuantFinanceBook) | ★ 857 |
| 44 | [QuantFinanceTraining](https://github.com/JoaoJungblut/QuantFinanceTraining) | This repository contains codes that were executed during my training in the CQF (Certificate in Quantitative Finance). The codes are organized by class, facilitating navigation and reference. | [JoaoJungblut/QuantFinanceTraining](https://github.com/JoaoJungblut/QuantFinanceTraining) | ★ 40 |
| 45 | [Quantitative-Notebooks](https://github.com/LongOnly/Quantitative-Notebooks) | Educational notebooks on quantitative finance, algorithmic trading, financial modelling and investment strategy | [LongOnly/Quantitative-Notebooks](https://github.com/LongOnly/Quantitative-Notebooks) | ★ 1,315 |
| 46 | [rough_bergomi](https://github.com/ryanmccrickerd/rough_bergomi) | A Python implementation of the rough Bergomi model. | [ryanmccrickerd/rough_bergomi](https://github.com/ryanmccrickerd/rough_bergomi) | ★ 141 |
| 47 | [RoughVolatilityWorkshop](https://github.com/jgatheral/RoughVolatilityWorkshop) | 2024 QuantMind's Rough Volatility Workshop lectures. | [jgatheral/RoughVolatilityWorkshop](https://github.com/jgatheral/RoughVolatilityWorkshop) | ★ 71 |
| 48 | [Stock_Analysis_For_Quant](https://github.com/LastAncientOne/Stock_Analysis_For_Quant) | Different Types of Stock Analysis in Excel, Matlab, Power BI, Python, R, and Tableau. | [LastAncientOne/Stock_Analysis_For_Quant](https://github.com/LastAncientOne/Stock_Analysis_For_Quant) | ★ 1,984 |
| 49 | [systematictradingexamples](https://github.com/robcarver17/systematictradingexamples) | Examples of code related to book [Systematic Trading](www.systematictrading.org) and [blog](http://qoppac.blogspot.com) | [robcarver17/systematictradingexamples](https://github.com/robcarver17/systematictradingexamples) | ★ 461 |
| 50 | [Technical Analysis and Feature Engineering](https://github.com/jo-cho/Technical_Analysis_and_Feature_Engineering) | Feature Engineering and Feature Importance of Machine Learning in Financial Market. | [jo-cho/Technical_Analysis_and_Feature_Engineering](https://github.com/jo-cho/Technical_Analysis_and_Feature_Engineering) | ★ 198 |
| 51 | [Tidy Finance](https://www.tidy-finance.org/) | An opinionated approach to empirical research in financial economics - a fully transparent, open-source code base in multiple programming languages (Python and R) to enable the reproducible implementation of financial research projects for students and practitioners. | [tidy-finance/website](https://github.com/tidy-finance/website) | — |
| 52 | [Value Investing Studies](https://github.com/euclidjda/value-investing-studies) | A collection of data analysis studies that examine the performance and characteristics of value investing over long periods of time. | [euclidjda/value-investing-studies](https://github.com/euclidjda/value-investing-studies) | ★ 92 |
| 53 | [volatility-trading](https://github.com/jasonstrimpel/volatility-trading) | A complete set of volatility estimators based on Euan Sinclair's Volatility Trading. | [jasonstrimpel/volatility-trading](https://github.com/jasonstrimpel/volatility-trading) | ★ 1,881 |

## Frameworks

| # | Name | Description | GitHub | Stars |
|--:|------|-------------|--------|------:|
| 1 | [JQuantLib](https://github.com/frgomes/jquantlib) | Java port. | [frgomes/jquantlib](https://github.com/frgomes/jquantlib) | ★ 152 |
| 2 | [OpenFinClaw](https://github.com/cryptoSUN2049/openFinclaw) | AI-native hedge fund platform: natural language strategy generation, Rust backtesting engine, multi-market execution, and self-evolving strategy pipeline. | [cryptoSUN2049/openFinclaw](https://github.com/cryptoSUN2049/openFinclaw) | — |
| 3 | [Polymarket Scanner API](https://github.com/vesper-astrena/polymarket-scanner-api) | Real-time arbitrage detection API for Polymarket prediction markets, scanning 12000+ markets for mispricings. | [vesper-astrena/polymarket-scanner-api](https://github.com/vesper-astrena/polymarket-scanner-api) | — |
| 4 | [Portfolio Optimizer](https://portfoliooptimizer.io/) | Portfolio Optimizer is a Web API for portfolio analysis and optimization. | — | — |
| 5 | [PreReason](https://github.com/PreReason/mcp) | Pre-analyzed Bitcoin and macro market briefings for AI agents with trend signals, confidence scores, and regime classification via REST API and MCP. | [PreReason/mcp](https://github.com/PreReason/mcp) | — |
| 6 | [PyQL](https://github.com/enthought/pyql) | Python port. | [enthought/pyql](https://github.com/enthought/pyql) | ★ 1,261 |
| 7 | [QLNet](https://github.com/amaggiulli/qlnet) | .Net port. | [amaggiulli/qlnet](https://github.com/amaggiulli/qlnet) | ★ 422 |
| 8 | [QuantLib](https://github.com/lballabio/QuantLib) | The QuantLib project is aimed at providing a comprehensive software framework for quantitative finance. | [lballabio/QuantLib](https://github.com/lballabio/QuantLib) | ★ 6,886 |
| 9 | [QuantLib-Python Documentation](https://quantlib-python-docs.readthedocs.io/) | Documentation for the Python bindings for the QuantLib library | — | — |
| 10 | [QuantLib.jl](https://github.com/pazzo83/QuantLib.jl) | Julia port. | [pazzo83/QuantLib.jl](https://github.com/pazzo83/QuantLib.jl) | ★ 143 |
| 11 | [QuantLibAddin](https://www.quantlib.org/quantlibaddin/) | Excel support. | — | — |
| 12 | [QuantLibXL](https://www.quantlib.org/quantlibxl/) | Excel support. | — | — |
| 13 | [RQuantLib](https://github.com/eddelbuettel/rquantlib) | R port. | [eddelbuettel/rquantlib](https://github.com/eddelbuettel/rquantlib) | ★ 131 |
| 14 | [SwapAPI](https://swapapi.dev) | Free DEX aggregator API returning executable swap calldata across 46 EVM chains. No API key required. | — | — |
| 15 | [TA-Lib](https://ta-lib.org) | perform technical analysis of financial market data. | [TA-Lib/ta-lib-python](https://github.com/TA-Lib/ta-lib-python) | — |

<!-- TOOLS-END -->



## Contributing

To add a tool, edit `data/projects.csv` and open a PR:

1. Append a new row at the **bottom** of `data/projects.csv` (order doesn't matter)
2. CI will automatically validate the CSV format

### Column Reference

| Column | Required | Format | Example |
|--------|----------|--------|---------|
| `project` | Yes | Plain text | `pandas` |
| `section` | No | `Language > Category` | `Python > Data Analysis` |
| `url` | Yes | Full URL with `https://` | `https://pandas.pydata.org` |
| `description` | No | Plain text (quote if contains commas) | `"Fast, powerful data analysis"` |
| `github` | No | GitHub Repo URL | `https://github.com/user/mylib` |

**Example row to append:**
```csv
mylib,Python > Data Analysis,https://github.com/user/mylib,A great library,https://github.com/user/mylib
```


## Related Lists

- [awesome-sec-filings](https://github.com/vibeyclaw/awesome-sec-filings) - A curated list of tools, data sources, libraries, and resources for working with SEC filings (13F, 10-K, 10-Q, 8-K).