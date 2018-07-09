import React, { Component } from 'react'
import './css/index.css'
import $ from 'jquery'
import PubSub from '../PubSub'

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  render() {
    return (
      <div className='tab_panel_wrap'>
        <div className='tab_panel container' id='tab_panel1'>
          <div className='row'>
            <div className='col-lg-5 tab_panel1_left col-xs-3 col-sm-5 col-md-5'>
              <div className='logo_2X'></div>
              <div className='tab_panel1_left_tags'>
                <p>TECHNOLOGY</p>
                <p>COMMUNITY</p>
                <p>TRADING</p>
              </div>
            </div>
            <div className='col-lg-7 tab_panel1_right col-xs-9 col-sm-7 col-md-7'>
              <div className='tab_panel1_right_tags'>
                <p>ABOUT</p>
                <p>FUTUREMONEY</p>
              </div>
              <div className='tab_panel1_right_content'>
                <p>A pioneer and global-leading investment institution focused exclusively on Blockchain technology. We have multi-layer business division including Future Money Research Institute, and all kinds of Blockchain assets fund such as Equity Fund, Cryptocurrency Investment Fund, Quantitative Fund ,etc.</p>

              </div>
            </div>
          </div>
        </div>
        <div className='tab_panel' id='tab_panel2'>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-3 col-xs-6 col-sm-3 col-md-3'>
                <div className='tab_panel2_item'>
                  <img src='' />
                  <h2>EO HAO</h2>
                  <p>PARTNER</p>
                </div>
              </div>
              <div className='col-lg-3 col-xs-6 col-sm-3 col-md-3'>
                <div className='tab_panel2_item'>
                  <img src='' />
                  <h2>STEVNE LI</h2>
                  <p>PARTNER</p>
                </div>
              </div>
              <div className='col-lg-3 col-xs-6 col-sm-3 col-md-3'>
                <div className='tab_panel2_item'>
                  <img src='' />
                  <h2>FRCIANS TANG</h2>
                  <p>PARTNER</p>
                </div>
              </div>
              <div className='col-lg-3 col-xs-6 col-sm-3 col-md-3'>
                <div className='tab_panel2_item'>
                  <img src='' />
                  <h2>SAM LI</h2>
                  <p>PARTNER</p>
                </div>
              </div>
            </div>
          </div>
          <div className='tab_panel2_photo'>
              <img src={require('./imgs/photo.jpg')}/>
          </div>
        </div>

        <div className='tab_panel container' id='tab_panel3'>
          <img src={require('./imgs/logos.png')} />
        </div>
        <div className='tab_panel container' id='tab_panel4'>
          <div className='tab_panel5_item'>
            <div></div>
            <h2>FUTUREMONEY VENTURES - PRIMARY MARKET FUND</h2>
            <p>As a globalized investment institution, we aim to achieve Full-cycle investment management capability. That’s why we are focusing on acquire rich resources on overseas and mainland projects, strong partnerships in the whole industry and building a top-listed research team. And we pride ourselves on being an acute investor and having a sharp business sense. Only in order to accelerate the future of  Blockchain economy by supporting those Blockchain enabled companies with great potential.</p>
          </div>
          <div className='tab_panel5_item' style={{ marginTop: '3.4rem' }}>
            <div></div>
            <h2>FUTUREMONEY QUANT - SECONDARY MARKET FUND</h2>
            <p>FutureMoney Quant is powered by Mobius - a quantitative trading solution developed by FutureMoney.  Mobius’s quantitative strategies team seeks to generate beta by combining rigorous fundamental research with mathematical and statistical models to identify and execute on investment opportunities. With our multiple investment strategies across market arbitrage and cross-variety arbitrage etc, we are seeking a stable asset growth in the relatively unsettled market.</p>
          </div>
        </div>
        <div className='tab_panel' id='tab_panel5'>
          <div className='bottom_logo'></div>
          <p>cooperation@futuremoneyventures.com</p>
        </div>
      </div>
    )
  }
  changeLanguage(key){
    switch (key) {
      case 'EN':
        $('.link_item a').eq(0).text('ABOUT')
        $('.link_item a').eq(1).text('TEAM')
        $('.link_item a').eq(2).text('PORTFOLIO')
        $('.link_item a').eq(3).text('FUNDS')
        $('.tab_panel1_right_tags p').eq(0).text('ABOUT')
        $('.tab_panel1_right_content p').text('A pioneer and global-leading investment institution focused exclusively on Blockchain technology. We have multi-layer business division including Future Money Research Institute, and all kinds of Blockchain assets fund such as Equity Fund, Cryptocurrency Investment Fund, Quantitative Fund ,etc.')
        $('.tab_panel5_item h2').eq(0).text('FUTUREMONEY VENTURES - PRIMARY MARKET FUND')
        $('.tab_panel5_item p').eq(0).text('As a globalized investment institution, we aim to achieve Full-cycle investment management capability. That’s why we are focusing on acquire rich resources on overseas and mainland projects, strong partnerships in the whole industry and building a top-listed research team. And we pride ourselves on being an acute investor and having a sharp business sense. Only in order to accelerate the future of  Blockchain economy by supporting those Blockchain enabled companies with great potential.')
        $('.tab_panel5_item h2').eq(1).text('FUTUREMONEY QUANT - SECONDARY MARKET FUND')
        $('.tab_panel5_item p').eq(1).text('FutureMoney Quant is powered by Mobius - a quantitative trading solution developed by FutureMoney.  Mobius’s quantitative strategies team seeks to generate beta by combining rigorous fundamental research with mathematical and statistical models to identify and execute on investment opportunities. With our multiple investment strategies across market arbitrage and cross-variety arbitrage etc, we are seeking a stable asset growth in the relatively unsettled market.')
        break;
      case 'CN':
        $('.link_item a').eq(0).text('关于我们')
        $('.link_item a').eq(1).text('团队')
        $('.link_item a').eq(2).text('投资组合')
        $('.link_item a').eq(3).text('基金')
        $('.tab_panel1_right_tags p').eq(0).text('关于')
        $('.tab_panel1_right_content p').text('全球领先的区块链投资研究机构。旗下设有行业研究院、区块链股权投资基金、数字货币投资基金、数字货币量化策略基金等。以价值投资为核心，构建了独特的投资策略，在市场周期性波动中实现了全天候的投资管理，坚定的助推区块链技术更新和应用落地。')
        $('.tab_panel5_item h2').eq(0).text('FUTUREMONEY VENTURES')
        $('.tab_panel5_item p').eq(0).text('FUTUREMONEY旗下一级投资基金产品。专注于全球优质项目搜罗，拥有顶尖的研究团队和遍布全球的合作伙伴，具备区块链投资全周期综合管理实力。旨在通过对区块链初创企业的支持和帮助来助推行业发展。')
        $('.tab_panel5_item h2').eq(1).text('FUTUREMONEY QUANT')
        $('.tab_panel5_item p').eq(1).text('FUTUREMONEY旗下二级市场量化套利交易基金产品Mobius。通过选取登录交易所市值前二十名的主流数字货币，在全球十大交易所进行全自动化跨市场&跨品种&跨期套利，在周期性波动的市场中寻求稳定的价值增长。目前基金规模超过20万ETH。')
        break;
      default:
        break;
    }
  }
  componentDidMount() {
    var that = this;
    let link_items = $('.link_item')
    let tab_panels = $('.tab_panel')
    link_items.click(function () {
      let index = link_items.index(this);
      $('body,html').animate({ scrollTop: $('.tab_panel:eq(' + index + ')').offset().top - 100 }, 200);
      PubSub.publish('closeNav', false)
    });
    window.addEventListener('scroll', () => {
      let scrollTop = $(document).scrollTop();
      tab_panels.each(function (index, element) {
        let contentItem = $(this);
        let offsetTop = contentItem.offset().top;
        if (scrollTop > offsetTop - 300) {
          $(".navbar-nav").find(".active").removeClass("active");
          $(link_items[index]).addClass('active');
        }
      });

    })
    PubSub.subscribe('changeLanguage',key=>{
      this.changeLanguage(key)
      PubSub.publish('closeNav', false)
    })
    $(".language_change").delegate("a", "click", function () {
      $(".language_change").find(".current_ln").removeClass("current_ln");
      $(this).addClass('current_ln');
      that.changeLanguage($(this).text())
    });
  }
}

export default IndexPage
