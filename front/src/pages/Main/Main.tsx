import './Main.sass'
import React from "react";
import Cookies from "js-cookie";
import { Redirect } from 'react-router-dom';
import Task from "../../components/Task/Task";

const Main = () => {
  if ( !Cookies.get('token') )
    return <Redirect to='/auth/sing-in' />
  else
    return (
    <div className='main' >
      <div className='container'>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
        <Task text='awsfasfafasdfadfgasdfasdfgasd.asdflkjasdfl;asdfh;asdfhasdfhasd hasdfi asdfkl asdhfiasduas' id={2}/>
      </div>
    </div>
    )
}

export default Main