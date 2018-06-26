import React, { Component } from 'react'
import Link from 'gatsby-link'
import './header.css'
import $ from 'jquery'
import PubSub from '../../PubSub'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false
    }
  }
  render() {
    return (
      <div className={`navbar navbar-default navbar-fixed-top`}>
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" style={{ fontSize: '.8rem', color: '#000', fontFamily: 'PingFangSC-Regular' }} className='brand'>
              <span className={`logo_top`}></span>
              FUTUREMONEY
              </Link>
            <div className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">

            </div>
          </div>
          <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
            <ul className='nav navbar-nav navbar-right'>
              <li className={'active link_item'}><a href="javascript:;">ABOUT</a></li>
              <li className={'link_item'}><a href="javascript:;">TEAM</a></li>
              <li className={'link_item'}><a href="javascript:;">PORTFOLIO</a></li>
              <li className={'link_item'}><a href="javascript:;">FUNDS</a></li>
            </ul>
          </div>

        </div>
      </div>
    );
  }
  componentDidMount() {
    let nav_button = $('.navbar-toggle')
    let navbar_collapse =$('.navbar-collapse ')
    let navbar =$('.navbar-default');
    nav_button.click(() => {
      this.setState({
        showNav: !this.state.showNav
      })
    })
    PubSub.subscribe('closeNav',closeNav=>{
      this.setState({
        showNav: closeNav
      })
    })
    window.addEventListener('scroll',()=>{
      let scrollTop = $(document).scrollTop();
      if(scrollTop>100){
        navbar.addClass('navbar_shadow');
      }else{
        navbar.removeClass('navbar_shadow');
      }
      if(scrollTop>50){
        navbar_collapse.addClass('navbar-collapse_shadow');
      }else if(!this.state.showNav){
        navbar_collapse.removeClass('navbar-collapse_shadow');
      }
    })
  }
  componentDidUpdate(){
    let main_links = $('.navbar-collapse')
    let nav_button = $('.navbar-toggle')
    let navbar_collapse =$('.navbar-collapse ')
    if (this.state.showNav) {
      main_links.addClass('showNav');
      nav_button.addClass('navbar-toggle-close')
      navbar_collapse.addClass('navbar-collapse_shadow')
    } else {
      main_links.removeClass('showNav');
      nav_button.removeClass('navbar-toggle-close')
      let scrollTop = $(document).scrollTop();
      if(scrollTop<50){
        navbar_collapse.removeClass('navbar-collapse_shadow')
      }
    }
  }
}

export default Header
