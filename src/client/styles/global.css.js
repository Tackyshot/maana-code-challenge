import {StyleSheet} from 'aphrodite';

export default StyleSheet.create({
  appContent:{
    width: '100%',
    margin: '10px 20px'
  },
  h1:{

  },
  h2:{
    textDecoration: 'underline',
  },
  hr: {
    border: "0",
    height: "1px",
    background: "#333",
    backgroundImage: "linear-gradient(to right, #ccc, #333, #ccc)",
    width: '100%'
  },
  p:{
    fontSize: '14px',
  },
  link_btn: {
  // define size / padding etc. color is other shit.
    borderRadius: '5px',
    padding: '18px 20px',
    color: 'white,',
    textDecoration: 'none',
    [':visited']:{
      color: 'white'
    }
  },
  button: {

  },
  block:{
    display: 'block'
  },
  row: {
    flexDirection: 'row'
  },
  column: {
    flexDirection: 'column'
  },
  ul: {
    listStyleType: 'none',
    display: 'flex',
    flexDirection: 'column'
  },
  li: {
    display: 'flex',
    padding: '5px 0px'
  },
  select_box: {
    width: '300px',
    height: '50px',
    backgroundColor: '#00a5ee',
    color: 'white',
    fontSize: '16px',
    border: 'none',
  }

});