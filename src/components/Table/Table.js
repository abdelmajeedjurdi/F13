import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import { Checkbox  } from '@material-ui/core';

import { Button } from '@material-ui/core';
import Typography from '../../views/Typography/Typography';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn, MDBCard, MDBCardBody } from 'mdbreact';

class TablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tableNumber: 0,
      calendar: '',
      tableid: 0,
      time: [],
      disabled: true,
      checked: false,
      checkedBoxes: [
      ],
      checkboxTable: 0,
      columns: [
        {
          label: 'Table',
          field: 'id',
          sort: 'asc',
        },
        {
          label: '10:00 am',
          field: 'first',
          sort: 'asc'
        },
        {
          label: '12:00 pm',
          field: 'asd',
          sort: 'asdfgc'
        },
        {
          label: '02:00 pm',
          field: 'laest',
          sort: 'asfgghfc'
        },
        {
          label: '04:00 pm',
          field: 'lsfgw4ast',
          sort: 'ege'
        },
        {
          label: '06:00 pm',
          field: 'wrgw',
          sort: 'w4tw'
        },
        {
          label: '08:00 pm',
          field: 'lafghfst',
          sort: 'asrggerc'
        },
        {
          label: '10:00 pm',
          field: 'lawrwst',
          sort: 'wrt'
        },
        {
          label: '12:00 am',
          field: 'lawrwst',
          sort: 'wrt'
        },
        {
          label: '02:00 am',
          field: 'lawrwst',
          sort: 'wrt'
        },
        {
          label: 'Cost',
          field: 'dsdsds',
          sort: 'wrt'
        },
        {
          label: 'Request',
          field: 'dswqe',
          sort: 'asc'
        }
      ],

      display: false
    }
  }
  // checking =()=>{
  //   {if(this.props.date===true){
  //       this.setState({    disabled
  //         :false})
  //     }}
  // }


  reserve = (time) => {
    let temp = this.state.time;
    temp.push(time)
    this.setState({
      time: temp
    })
  }
  componentDidMount = () => {
    this.setState({ tableid: window.location.href.split('/')[5] })

    const intervalFocus = setInterval(() => {
      if (document !== undefined) {
        const rows = document.querySelectorAll('table.table tr');

        console.log('rows ', rows);
        for (let index = 0; index < rows.length; index++) {
          const current_row = rows[index];
          console.log('parseInt(current_row.children[0].innerText) ', parseInt(current_row.children[0].innerText));
          console.log('parseInt(window.location.href.split ', parseInt(window.location.href.split('/')[5]))
          if (parseInt(current_row.children[0].innerText) === parseInt(window.location.href.split('/')[5]) ) {
            current_row.scrollIntoView();
            clearInterval(intervalFocus);
          }
        }
      }
    }, 300)
  }


  render() {

    const
      rows_rounded_btn = [
        {
          'id': 1,
          // 'first': <Checkbox color="default" rounded size="sm" checked={this.state.checked} onChange={()=>{
          //   this.setState({checked:!this.state.checked,
          //   disable:false})
          // }}></Checkbox>,
          'first': <Checkbox color="default" rounded size="sm" name={10} onChange={(e) => this.reserve(e.target.name)} />,
          'last': <Checkbox color="default" rounded size="sm" name={12} onChange={(e) => this.reserve(e.target.name)} />,
          'handle': <Checkbox color="default" rounded size="sm" name={2} onChange={(e) => this.reserve(e.target.name)} />,
          'asd': <Checkbox color="default" rounded size="sm" name={4} onChange={(e) => this.reserve(e.target.name)} />,
          'laest': <Checkbox color="default" rounded size="sm" name={6} onChange={(e) => this.reserve(e.target.name)} />,
          'lsfgw4ast': <Checkbox color="default" rounded size="sm" name={8} onChange={(e) => this.reserve(e.target.name)} />,
          'wrgw': <Checkbox color="default" rounded size="sm" name={11} onChange={(e) => this.reserve(e.target.name)} />,
          'lafghfst': <Checkbox color="default" rounded size="sm" name={13} onChange={(e) => this.reserve(e.target.name)} />,
          'lawrwst': <Checkbox color="default" rounded size="sm" name={15} onChange={(e) => this.reserve(e.target.name)} />,
          'dsdsds': <text color="default" rounded size="sm" >10$</text>,
          /* 'dswqe': <MDBBtn   color="cyan" type="submit" rounded size="sm" value={2} onClick={(e)=>this.setState({tableid:e.target.value})} Link to="/Table"> Request</MDBBtn>, */
          'dswqe': <MDBBtn color="cyan" type="submit" value={1} rounded size="sm" onClick={(e) => this.setState({ display: !this.state.display, tableid: e.target.value, calendar: this.props.calendar })} Link to="/Table"> Request</MDBBtn>,
        },
        {
          'id': 2,
          'first': <Checkbox color="default" rounded size="sm" name={10} onChange={(e) => this.reserve(e.target.name)} />,
          'last': <Checkbox color="default" rounded size="sm" name={12} onChange={(e) => this.reserve(e.target.name)} />,
          'handle': <Checkbox color="default" rounded size="sm" name={2} onChange={(e) => this.reserve(e.target.name)} />,
          'asd': <Checkbox color="default" rounded size="sm" name={4} onChange={(e) => this.reserve(e.target.name)} />,
          'laest': <Checkbox color="default" rounded size="sm" name={6} onChange={(e) => this.reserve(e.target.name)} />,
          'lsfgw4ast': <Checkbox color="default" rounded size="sm" name={8} onChange={(e) => this.reserve(e.target.name)} />,
          'wrgw': <Checkbox color="default" rounded size="sm" name={11} onChange={(e) => this.reserve(e.target.name)} />,
          'lafghfst': <Checkbox color="default" rounded size="sm" name={13} onChange={(e) => this.reserve(e.target.name)} />,
          'lawrwst': <Checkbox color="default" rounded size="sm" name={15} onChange={(e) => this.reserve(e.target.name)} />,
          'dsdsds': <text color="default" rounded size="sm" >10$</text>,
          /* 'dswqe': <MDBBtn   color="cyan" type="submit" rounded size="sm" value={2} onClick={(e)=>this.setState({tableid:e.target.value})} Link to="/Table"> Request</MDBBtn>, */
          'dswqe': <MDBBtn color="cyan" type="submit" value={2} rounded size="sm" onClick={(e) => this.setState({ display: !this.state.display, tableid: e.target.value, calendar: this.props.calendar })} Link to="/Table"> Request</MDBBtn>,
        },
        {
          'id': 3,
          'first': <Checkbox color="default" rounded size="sm" name={10} onChange={(e) => this.reserve(e.target.name)} />,
          'last': <Checkbox color="default" rounded size="sm" name={12} onChange={(e) => this.reserve(e.target.name)} />,
          'handle': <Checkbox color="default" rounded size="sm" name={2} onChange={(e) => this.reserve(e.target.name)} />,
          'asd': <Checkbox color="default" rounded size="sm" name={4} onChange={(e) => this.reserve(e.target.name)} />,
          'laest': <Checkbox color="default" rounded size="sm" name={6} onChange={(e) => this.reserve(e.target.name)} />,
          'lsfgw4ast': <Checkbox color="default" rounded size="sm" name={8} onChange={(e) => this.reserve(e.target.name)} />,
          'wrgw': <Checkbox color="default" rounded size="sm" name={11} onChange={(e) => this.reserve(e.target.name)} />,
          'lafghfst': <Checkbox color="default" rounded size="sm" name={13} onChange={(e) => this.reserve(e.target.name)} />,
          'lawrwst': <Checkbox color="default" rounded size="sm" name={15} onChange={(e) => this.reserve(e.target.name)} />,
          'dsdsds': <text color="default" rounded size="sm" >10$</text>,
          /* 'dswqe': <MDBBtn   color="cyan" type="submit" rounded size="sm" value={2} onClick={(e)=>this.setState({tableid:e.target.value})} Link to="/Table"> Request</MDBBtn>, */
          'dswqe': <MDBBtn color="cyan" type="submit" value={3} rounded size="sm" onClick={(e) => this.setState({ display: !this.state.display, tableid: e.target.value, calendar: this.props.calendar })} Link to="/Table"> Request</MDBBtn>,
        },
        {
          'id': 4,
          'first': <Checkbox color="default" rounded size="sm" name={10} onChange={(e) => this.reserve(e.target.name)} />,
          'last': <Checkbox color="default" rounded size="sm" name={12} onChange={(e) => this.reserve(e.target.name)} />,
          'handle': <Checkbox color="default" rounded size="sm" name={2} onChange={(e) => this.reserve(e.target.name)} />,
          'asd': <Checkbox color="default" rounded size="sm" name={4} onChange={(e) => this.reserve(e.target.name)} />,
          'laest': <Checkbox color="default" rounded size="sm" name={6} onChange={(e) => this.reserve(e.target.name)} />,
          'lsfgw4ast': <Checkbox color="default" rounded size="sm" name={8} onChange={(e) => this.reserve(e.target.name)} />,
          'wrgw': <Checkbox color="default" rounded size="sm" name={11} onChange={(e) => this.reserve(e.target.name)} />,
          'lafghfst': <Checkbox color="default" rounded size="sm" name={13} onChange={(e) => this.reserve(e.target.name)} />,
          'lawrwst': <Checkbox color="default" rounded size="sm" name={15} onChange={(e) => this.reserve(e.target.name)} />,
          'dsdsds': <text color="default" rounded size="sm" >10$</text>,
          /* 'dswqe': <MDBBtn   color="cyan" type="submit" rounded size="sm" value={2} onClick={(e)=>this.setState({tableid:e.target.value})} Link to="/Table"> Request</MDBBtn>, */
          'dswqe': <MDBBtn color="cyan" type="submit" value={4} rounded size="sm" onClick={(e) => this.setState({ display: !this.state.display, tableid: e.target.value, calendar: this.props.calendar })} Link to="/Table"> Request</MDBBtn>,
        },
        {
          'id': 5,
          'first': <Checkbox color="default" rounded size="sm" name={10} onChange={(e) => this.reserve(e.target.name)} />,
          'last': <Checkbox color="default" rounded size="sm" name={12} onChange={(e) => this.reserve(e.target.name)} />,
          'handle': <Checkbox color="default" rounded size="sm" name={2} onChange={(e) => this.reserve(e.target.name)} />,
          'asd': <Checkbox color="default" rounded size="sm" name={4} onChange={(e) => this.reserve(e.target.name)} />,
          'laest': <Checkbox color="default" rounded size="sm" name={6} onChange={(e) => this.reserve(e.target.name)} />,
          'lsfgw4ast': <Checkbox color="default" rounded size="sm" name={8} onChange={(e) => this.reserve(e.target.name)} />,
          'wrgw': <Checkbox color="default" rounded size="sm" name={11} onChange={(e) => this.reserve(e.target.name)} />,
          'lafghfst': <Checkbox color="default" rounded size="sm" name={13} onChange={(e) => this.reserve(e.target.name)} />,
          'lawrwst': <Checkbox color="default" rounded size="sm" name={15} onChange={(e) => this.reserve(e.target.name)} />,
          'dsdsds': <text color="default" rounded size="sm" >10$</text>,
          /* 'dswqe': <MDBBtn   color="cyan" type="submit" rounded size="sm" value={2} onClick={(e)=>this.setState({tableid:e.target.value})} Link to="/Table"> Request</MDBBtn>, */
          'dswqe': <MDBBtn color="cyan" type="submit" value={5} rounded size="sm" onClick={(e) => this.setState({ display: !this.state.display, tableid: e.target.value, calendar: this.props.calendar })} Link to="/Table"> Request</MDBBtn>,
        },
        {
          'id': 6,
          'first': <Checkbox color="default" rounded size="sm" name={10} onChange={(e) => this.reserve(e.target.name)} />,
          'last': <Checkbox color="default" rounded size="sm" name={12} onChange={(e) => this.reserve(e.target.name)} />,
          'handle': <Checkbox color="default" rounded size="sm" name={2} onChange={(e) => this.reserve(e.target.name)} />,
          'asd': <Checkbox color="default" rounded size="sm" name={4} onChange={(e) => this.reserve(e.target.name)} />,
          'laest': <Checkbox color="default" rounded size="sm" name={6} onChange={(e) => this.reserve(e.target.name)} />,
          'lsfgw4ast': <Checkbox color="default" rounded size="sm" name={8} onChange={(e) => this.reserve(e.target.name)} />,
          'wrgw': <Checkbox color="default" rounded size="sm" name={11} onChange={(e) => this.reserve(e.target.name)} />,
          'lafghfst': <Checkbox color="default" rounded size="sm" name={13} onChange={(e) => this.reserve(e.target.name)} />,
          'lawrwst': <Checkbox color="default" rounded size="sm" name={15} onChange={(e) => this.reserve(e.target.name)} />,
          'dsdsds': <text color="default" rounded size="sm" >10$</text>,
          /* 'dswqe': <MDBBtn   color="cyan" type="submit" rounded size="sm" value={2} onClick={(e)=>this.setState({tableid:e.target.value})} Link to="/Table"> Request</MDBBtn>, */
          'dswqe': <MDBBtn color="cyan" type="submit" value={6} rounded size="sm" onClick={(e) => this.setState({ display: !this.state.display, tableid: e.target.value, calendar: this.props.calendar })} Link to="/Table"> Request</MDBBtn>,
        },
        {
          'id': 7,
          'first': <Checkbox color="default" rounded size="sm" name={10} onChange={(e) => this.reserve(e.target.name)} />,
          'last': <Checkbox color="default" rounded size="sm" name={12} onChange={(e) => this.reserve(e.target.name)} />,
          'handle': <Checkbox color="default" rounded size="sm" name={2} onChange={(e) => this.reserve(e.target.name)} />,
          'asd': <Checkbox color="default" rounded size="sm" name={4} onChange={(e) => this.reserve(e.target.name)} />,
          'laest': <Checkbox color="default" rounded size="sm" name={6} onChange={(e) => this.reserve(e.target.name)} />,
          'lsfgw4ast': <Checkbox color="default" rounded size="sm" name={8} onChange={(e) => this.reserve(e.target.name)} />,
          'wrgw': <Checkbox color="default" rounded size="sm" name={11} onChange={(e) => this.reserve(e.target.name)} />,
          'lafghfst': <Checkbox color="default" rounded size="sm" name={13} onChange={(e) => this.reserve(e.target.name)} />,
          'lawrwst': <Checkbox color="default" rounded size="sm" name={15} onChange={(e) => this.reserve(e.target.name)} />,
          'dsdsds': <text color="default" rounded size="sm" >10$</text>,
          /* 'dswqe': <MDBBtn   color="cyan" type="submit" rounded size="sm" value={2} onClick={(e)=>this.setState({tableid:e.target.value})} Link to="/Table"> Request</MDBBtn>, */
          'dswqe': <MDBBtn color="cyan" type="submit" value={7} rounded size="sm" onClick={(e) => this.setState({ display: !this.state.display, tableid: e.target.value, calendar: this.props.calendar })} Link to="/Table"> Request</MDBBtn>,
        },
        {
          'id': 8,
          'first': <Checkbox color="default" rounded size="sm" name={10} onChange={(e) => this.reserve(e.target.name)} />,
          'last': <Checkbox color="default" rounded size="sm" name={12} onChange={(e) => this.reserve(e.target.name)} />,
          'handle': <Checkbox color="default" rounded size="sm" name={2} onChange={(e) => this.reserve(e.target.name)} />,
          'asd': <Checkbox color="default" rounded size="sm" name={4} onChange={(e) => this.reserve(e.target.name)} />,
          'laest': <Checkbox color="default" rounded size="sm" name={6} onChange={(e) => this.reserve(e.target.name)} />,
          'lsfgw4ast': <Checkbox color="default" rounded size="sm" name={8} onChange={(e) => this.reserve(e.target.name)} />,
          'wrgw': <Checkbox color="default" rounded size="sm" name={11} onChange={(e) => this.reserve(e.target.name)} />,
          'lafghfst': <Checkbox color="default" rounded size="sm" name={13} onChange={(e) => this.reserve(e.target.name)} />,
          'lawrwst': <Checkbox color="default" rounded size="sm" name={15} onChange={(e) => this.reserve(e.target.name)} />,
          'dsdsds': <text color="default" rounded size="sm" >10$</text>,
          /* 'dswqe': <MDBBtn   color="cyan" type="submit" rounded size="sm" value={2} onClick={(e)=>this.setState({tableid:e.target.value})} Link to="/Table"> Request</MDBBtn>, */
          'dswqe': <MDBBtn color="cyan" type="submit" value={8} rounded size="sm" onClick={(e) => this.setState({ display: !this.state.display, tableid: e.target.value, calendar: this.props.calendar })} Link to="/Table"> Request</MDBBtn>,
        },
      ]
    if (typeof (this.state) != 'undefined') {
      return (

        <>
          {/* {this.checking()} */}
          {this.state.display && <Typography previousData={this.state} />}


          {/* <MDBTable btn>
        <MDBTableHead columns={this.state.columns} />
        <MDBTableBody rows={rows_rounded_btn} />
      </MDBTable> */}

          <MDBTable>
            <MDBTableHead>
              <tr>
                <th>Table num</th>
                <th>10:00</th>
                <th>12:00</th>
                <th>2:00</th>
                <th>4:00</th>
                <th>6:00</th>
                <th>8:00</th>
                <th>11:00</th>
                <th>Cost</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody >
              {rows_rounded_btn.map((value, index) => (
                <tr
                  tabIndex={this.state.tableid != index + 1 ?
                    '' : '1'}
                  style={{
                    backgroundColor: this.state.tableid == index + 1 ?
                      '#8e24aa' : '',
                  }}
                >
                  <td >{value.id}</td>
                  <td >{value.first}</td>
                  <td >{value.last}</td>
                  <td >{value.handle}</td>
                  <td >{value.asd}</td>
                  <td > {value.lsfgw4ast}</td>
                  <td >{value.wrgw}</td>
                  <td >{value.lafghfst}</td>
                  <td >{value.dsdsds}</td>
                  <td >{value.dswqe}</td>
                </tr>
              ))}
            </MDBTableBody>
          </MDBTable>

        </>
      )
    } else {
      return null;
    }
  }
};

export default TablePage;