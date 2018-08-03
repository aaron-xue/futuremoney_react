import React, { Component } from 'react'
import './css/index.css'
import $ from 'jquery'
import PubSub from 'pubsub-js'

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
                <p>FutureMoney</p>
              </div>
              <div className='tab_panel1_right_content'>
                <p>FutureMoney is driven by Technology, by using machine learning, distributed computing and big data to find connections in the world’s data. We’ve been pushing the frontiers of blockchain since before it was a buzzword. Our blockchain research and development is focused on areas including network security, consensus governance and internet privacy. We committed to blockchain technology that benefits everyone.</p>

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
            <img src={require('./imgs/photo.jpg')} />
          </div>
        </div>

        <div className='tab_panel' id='tab_panel3'>
          <div className='tab_panel3_wrap'>
            <div className='col-lg-4 col-xs-4 col-sm-4 col-md-4 field_wrap'>
              <p>Sharding</p>
              <div className='field_item'>
                <p>Sharding</p>
                <i></i>
                <p>Network Sharding</p>
                <p>Transaction Sharding</p>
                <p>State Sharding</p>
              </div>
            </div>
            <div className='col-lg-4 col-xs-4 col-sm-4 col-md-4 field_wrap'>
              <p>TEE</p>
              <div className='field_item'>
                <p>TEE</p>
                <i></i>
                <p>Secure access</p>
                <p>Trusted identity</p>
                <p>Trusted authentication</p>
              </div>
            </div>
            <div className='col-lg-4 col-xs-4 col-sm-4 col-md-4 field_wrap'>
              <p>Zero—Knowledge Proof</p>
              <div className='field_item'>
                <p>Zero—Knowledge Proof</p>
                <i></i>
                <p>Completeness</p>
                <p>Soundness</p>
              </div>
            </div>
          </div>
          <p className='tab_panel3_aaa'>In Blockchain We Trust</p>
          <div className='tab_panel3_wrap'>
            <div className='col-lg-4 col-xs-4 col-sm-4 col-md-4 field_wrap'>
              Network security

              </div>
            <div className='col-lg-4 col-xs-4 col-sm-4 col-md-4 field_wrap haha'>
              <p>Consensus governance</p>
            </div>
            <div className='col-lg-4 col-xs-4 col-sm-4 col-md-4 field_wrap'>
              Internet privacy

              </div>
          </div>
          <img src={require('./imgs/logos.png')} className='logos'/>
        </div>
        <div className='tab_panel container' id='tab_panel4'>
          <h3>TECHNOLOGY-DRIVEN ENVIRONMENT</h3>
          <div className='row'>
            <div className='col-lg-4 col-xs-12 col-sm-4 col-md-4 tab_panel4_item'>
              <img src={require('./imgs/tab_panel4_item1.png')} />
              <h4>Strategy Research</h4>
              <p>We are focusing on Mean Reversion,Volatility analysis,wavelet transform and Particle Swarm Optimization.</p>
            </div>
            <div className='col-lg-4 col-xs-12 col-sm-4 col-md-4 tab_panel4_item'>
              <img src={require('./imgs/tab_panel4_item2.png')} />
              <h4>Artificial Intelligence</h4>
              <p>By using machine Learning, automatic tuning and big data, models are expanded, tested and integrated into our investment strategies.</p>
            </div>
            <div className='col-lg-4 col-xs-12 col-sm-4 col-md-4 tab_panel4_item'>
              <img src={require('./imgs/tab_panel4_item3.png')} />
              <h4>Data Management System</h4>
              <p>By using hadoop and spark, background data will be stored safely and efficiently.</p>
            </div>
          </div>
        </div>
        <div className='tab_panel container' id='tab_panel5'>
          <h3>ECOLOGICAL BLOCKCHAIN PLATFORM</h3>
          <div className='row'>
            <div className='col-lg-3 col-xs-6 col-sm-3 col-md-3 tab_panel5_item'>
              <img src={require('./imgs/tab_panel5_item1.png')} />
              <h4>DISTRIBUTED COMPUTATION</h4>
            </div>
            <div className='col-lg-3 col-xs-6 col-sm-3 col-md-3 tab_panel5_item'>
              <img src={require('./imgs/tab_panel5_item2.png')} />
              <h4>BIG DATA</h4>
            </div>
            <div className='col-lg-3 col-xs-6 col-sm-3 col-md-3 tab_panel5_item'>
              <img src={require('./imgs/tab_panel5_item3.png')} />
              <h4>TRADING SYSTEM</h4>
            </div>
            <div className='col-lg-3 col-xs-6 col-sm-3 col-md-3 tab_panel5_item'>
              <img src={require('./imgs/tab_panel5_item4.png')} />
              <h4>TRADING STRATEGY</h4>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-3 col-xs-6 col-sm-3 col-md-3 tab_panel5_item'>
              <img src={require('./imgs/tab_panel5_item5.png')} />
              <h4>REVERSE TESTING</h4>
            </div>
            <div className='col-lg-3 col-xs-6 col-sm-3 col-md-3 tab_panel5_item'>
              <img src={require('./imgs/tab_panel5_item6.png')} />
              <h4>TRADING SIMULATION</h4>
            </div>
            <div className='col-lg-3 col-xs-6 col-sm-3 col-md-3 tab_panel5_item'>
              <img src={require('./imgs/tab_panel5_item7.png')} />
              <h4>STRATEGY ECOSYSTEM</h4>
            </div>
            <div className='col-lg-3 col-xs-6 col-sm-3 col-md-3 tab_panel5_item'>
              <img src={require('./imgs/tab_panel5_item8.png')} />
              <h4>SUPER-NODE MECHANISM</h4>
            </div>
          </div>
        </div>
        <div className='tab_panel' id='tab_panel6'>
          <div className='bottom_logo'></div>
          <p>cooperation@futuremoneyventures.com</p>
        </div>
      </div>
    )
  }
  changeLanguage(key) {
    switch (key) {
      case 'EN':
        $('.link_item a').eq(0).text('About')
        $('.link_item a').eq(1).text('Team')
        $('.link_item a').eq(2).text('Research')
        $('.link_item a').eq(3).text('Technology')
        $('.link_item a').eq(4).text('Platform')
        $('.tab_panel1_right_tags p').eq(0).text('ABOUT')
        $('.tab_panel1_right_tags p').eq(1).text('FutureMoney')
        $('.tab_panel1_right_content p').text('FutureMoney is driven by Technology, by using machine learning, distributed computing and big data to find connections in the world’s data. We’ve been pushing the frontiers of blockchain since before it was a buzzword. Our blockchian research and development is focused on areas including network security, consensus governance and internet privacy. We committed to blockchain technology that benefits everyone.')
        $('.field_wrap>p').eq(0).text('Sharding')
        $('.field_wrap>p').eq(1).text('TEE')
        $('.field_wrap>p').eq(2).text('Zero—Knowledge Proof')
        $('.field_item').eq(0).children('p').eq(0).text('Sharding')
        $('.field_item').eq(0).children('p').eq(1).text('Network Sharding')
        $('.field_item').eq(0).children('p').eq(2).text('Transaction Sharding')
        $('.field_item').eq(0).children('p').eq(3).text('State Sharding')
        $('.field_item').eq(1).children('p').eq(0).text('TEE')
        $('.field_item').eq(1).children('p').eq(1).text('Secure access')
        $('.field_item').eq(1).children('p').eq(2).text('Trusted identity')
        $('.field_item').eq(1).children('p').eq(3).text('Trusted authentication')
        $('.field_item').eq(2).children('p').eq(0).text('Zero—Knowledge Proof')
        $('.field_item').eq(2).children('p').eq(1).text('Completeness')
        $('.field_item').eq(2).children('p').eq(2).text('Soundness')
        $('.field_wrap').eq(3).text('Network security')
        $('.field_wrap').eq(4).text('Consensus governance')
        $('.field_wrap').eq(5).text('Internet privacy')
        $('#tab_panel4 h3').text('TECHNOLOGY-DRIVEN ENVIRONMENT')
        $('.tab_panel4_item h4').eq(0).text('Strategy Research')
        $('.tab_panel4_item p').eq(0).text('We are focusing on Mean Reversion,Volatility analysis,wavelet transform and Particle Swarm Optimization.')
        $('.tab_panel4_item h4').eq(1).text('Artificial Intelligence')
        $('.tab_panel4_item p').eq(1).text('By using machine Learning, automatic tuning and big data, models are expanded, tested and integrated into our investment strategies.')
        $('.tab_panel4_item h4').eq(2).text('Data Management System')
        $('.tab_panel4_item p').eq(2).text('By using hadoop and spark, background data will be stored safely and efficiently.')
        $('#tab_panel5 h3').text('ECOLOGICAL BLOCKCHAIN PLATFORM')
        $('.tab_panel5_item h4').eq(0).text('SDISTRIBUTED COMPUTATION')
        $('.tab_panel5_item h4').eq(1).text('BIG DATA')
        $('.tab_panel5_item h4').eq(2).text('TRADING SYSTEM')
        $('.tab_panel5_item h4').eq(3).text('TRADING STRATEGY')
        $('.tab_panel5_item h4').eq(4).text('REVERSE TESTING')
        $('.tab_panel5_item h4').eq(5).text('TRADING SIMULATION')
        $('.tab_panel5_item h4').eq(6).text('STRATEGY ECOSYSTEM')
        $('.tab_panel5_item h4').eq(7).text('SUPER-NODE MECHANISM')

        break;
      case 'CN':
        $('.link_item a').eq(0).text('关于我们')
        $('.link_item a').eq(1).text('团队')
        $('.link_item a').eq(2).text('研究领域')
        $('.link_item a').eq(3).text('优势')
        $('.link_item a').eq(4).text('平台')
        $('.tab_panel1_right_tags p').eq(0).text('关于')
        $('.tab_panel1_right_tags p').eq(1).text('FutureMoney')
        $('.tab_panel1_right_content p').html('FutureMoney专注于区块链行业技术创新和应用落地，致力于高性能区块链系统的研发，推动区块链与人工智能、分布式计算、大数据的结合。<br>FutureMoney重点关注区块链技术在网络安全、共识治理和个人隐私保护方面的突破性创新，在进一步整合资源、深化技术建设的基础上，开展了一系列战略性布局。<br>FutureMoney组成了一支研发实力出众的团队，从技术、资金、资源等多方面全力推动区块链行业的发展。')
        $('.field_wrap>p').eq(0).text('分片技术')
        $('.field_wrap>p').eq(1).text('可信执行环境')
        $('.field_wrap>p').eq(2).text('零知识证明')
        $('.field_item').eq(0).children('p').eq(0).text('区块链扩容解决方案')
        $('.field_item').eq(0).children('p').eq(1).text('网络分片')
        $('.field_item').eq(0).children('p').eq(2).text('交易分片')
        $('.field_item').eq(0).children('p').eq(3).text('状态分片')
        $('.field_item').eq(1).children('p').eq(0).text('移动安全新概念')
        $('.field_item').eq(1).children('p').eq(1).text('安全接入')
        $('.field_item').eq(1).children('p').eq(2).text('可信身份')
        $('.field_item').eq(1).children('p').eq(3).text('可信认证')
        $('.field_item').eq(2).children('p').eq(0).text('密码学创新')
        $('.field_item').eq(2).children('p').eq(1).text('完备性')
        $('.field_item').eq(2).children('p').eq(2).text('可靠性')
        $('.field_wrap').eq(3).text('网络安全')
        $('.field_wrap').eq(4).text('共识治理')
        $('.field_wrap').eq(5).text('个人隐私保护')
        $('#tab_panel4 h3').text('技术驱动价值')
        $('.tab_panel4_item h4').eq(0).text('策略研究')
        $('.tab_panel4_item p').eq(0).text('波动率分析，均值回归，时间序列，动量分析，粒子群优化算法PSO，小波变换。')
        $('.tab_panel4_item h4').eq(1).text('人工智能')
        $('.tab_panel4_item p').eq(1).text('AI算法，机器学习，智能调参等人工智能算法研究更完善的交易系统和精准的交易策略。')
        $('.tab_panel4_item h4').eq(2).text('数据后台')
        $('.tab_panel4_item p').eq(2).text('搭建Hadoop，Spark大数据分析系统，智能，高效的提高了风控能力，让数据后台更安全。')
        $('#tab_panel5 h3').text('构建区块链技术生态全平台')
        $('.tab_panel5_item h4').eq(0).text('分布式计算')
        $('.tab_panel5_item h4').eq(1).text('大数据')
        $('.tab_panel5_item h4').eq(2).text('交易系统研究')
        $('.tab_panel5_item h4').eq(3).text('策略研究')
        $('.tab_panel5_item h4').eq(4).text('策略回测')
        $('.tab_panel5_item h4').eq(5).text('模拟交易')
        $('.tab_panel5_item h4').eq(6).text('策略生态圈')
        $('.tab_panel5_item h4').eq(7).text('打造节点')
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
    PubSub.subscribe('changeLanguage', (msg, key) => {
      this.changeLanguage(key)
      PubSub.publish('closeNav', false)
    })
    $(".language_change").delegate("a", "click", function () {
      $(".language_change").find(".current_ln").removeClass("current_ln");
      $(this).addClass('current_ln');
      that.changeLanguage($(this).text())
    });

    var field_wrap = $('.field_wrap');
    field_wrap.hover(function () {

      $(this).children('.field_item').addClass('field_item_show')
    }, function () {
      $(this).children('.field_item').removeClass('field_item_show')
    })
  }
}

export default IndexPage
