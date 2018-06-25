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
                <p>VENTURES</p>
              </div>
              <div className='tab_panel1_right_content'>
                <p>A pioneer and global-leading investment institution focused exclusively on Blockchain technology. We have multi-layer business division including Future Money Research Institute, and all kinds of Blockchain assets fund such as Equity Fund, Cryptocurrency Investment Fund, Quantitative Fund ,etc.</p>

              </div>
            </div>
          </div>
        </div>
        <div className='tab_panel container' id='tab_panel2'>
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
        <div className='tab_panel' id='tab_panel3'>
        </div>
        <div className='tab_panel container' id='tab_panel4'>
          <img src={require('./imgs/logos.png')} />
        </div>
        <div className='tab_panel container' id='tab_panel5'>
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
        <div className='tab_panel' id='tab_panel6'>
          <div className='bottom_logo'></div>
          <p>cooperation@futuremoneyventures.com</p>
        </div>
      </div>
    )
  }
  componentDidMount(){
    let link_items = $('.link_item')
    let tab_panels = $('.tab_panel')
    link_items.click(function () {
      let index = link_items.index(this);
      $('body,html').animate({ scrollTop: $('.tab_panel:eq(' + index + ')').offset().top - 100 }, 200);
      PubSub.publish('closeNav',false)
    });
    window.addEventListener('scroll', () => {
      let scrollTop = $(document).scrollTop();
      tab_panels.each(function (index, element) {
        let contentItem = $(this);
        let offsetTop = contentItem.offset().top;
        if (scrollTop > offsetTop - 100) {
          $(".navbar-nav").find(".active").removeClass("active");
          $(link_items[index]).addClass('active');
        }
      });

    })
  }
}

export default IndexPage
