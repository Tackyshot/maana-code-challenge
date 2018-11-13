import {StyleSheet} from 'aphrodite';

export default StyleSheet.create({
  integration_area:{
    width: '100%'
  },
  integration_header_area: {

  },
  btn_area: {
    padding: '20px',
    justifyContent: 'flex-end'
  },
  save_btn:{
    backgroundColor: 'green',
    width: '120px',
  },
  cancel_btn:{
    backgroundColor: 'orange'
  },
  integration_content_area:{
    justifyContent: 'space-between',
    padding: '0px 10px',
    height: '100%'
  },
  side_a:{
    borderRight: '1px solid darkgrey',
    paddingRight: '20px'
  },
  side_b:{
    paddingLeft: '20px'
  },
  integration_window:{
    width: '50%',
  },
  integration: {
    width: '100%',
  },
  endpoint_select_area:{

  },
  endpoint_select_wrapper:{
    justifyContent: 'center'
  },
  endpoint_select:{

  },
  endpoint_option:{

  },
  endpoint_info_area:{
    padding: '20px 0px'
  },
  endpoint_method_wrapper:{

  },
  endpoint_method: {
    backgroundColor: 'orange',
    padding: '10px 20px',
    color: 'white',
    borderRadius: '2px'
  },
  endpoint_path_wrapper:{
    padding: '10px 30px'
  },
  endpoint_path:{

  },
  integration_select_endpoint_message: {
    textAlign: 'center',

  },
  queryParamsSelect_area:{

  },
  queryParamsSelect_list:{

  },
  headerSelect_area:{

  },
  headerSelect_list:{

  },
  headerSelect_list_item:{

  },
  jsonVisualizer_area:{

  },
  jsonVisualizer_list:{
    padding: '10px',
    border: '1px solid lightgrey',
    // margin: '10px',
  },
  jsonVisualizer_list_item:{
    [':hover']:{
      backgroundColor: 'lightgrey',
      cursor: 'pointer'
    }
  },
  list_item_selected:{
    backgroundColor: 'lightblue'
  },
  list_item_unselected:{},
  mapping_indicator:{
    color: 'red',
    flexGrow: '2',
    textAlign: 'right',
    paddingRight: '10px'
  }
});