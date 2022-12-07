import { Component } from "react";
import style from "../styles/header.module.scss"
import logo from "../media/logo-white.png";
import {SearchOutlined,PhoneOutlined,DownOutlined } from "@ant-design/icons"
class Header extends Component {

render(){

 return(
<div className={style.container}>
<img className={style.logo} src={logo}/>

<ul className={style.list}>

<li>Home<DownOutlined /></li>
<li>Menu<DownOutlined /></li>
<li>About<DownOutlined /></li>
<li>Shop<DownOutlined /></li>
<li>Blog<DownOutlined /></li>
<li>Pages<DownOutlined /></li>
<li><SearchOutlined /></li>

</ul>

<p className={style.num}><PhoneOutlined/>000 (123) 456 89</p>
<p className={style.book}>BOOK A TABLE</p>

</div>

 )

}



}

export default Header