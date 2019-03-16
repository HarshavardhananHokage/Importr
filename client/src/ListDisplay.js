import React from 'react';
import { connect } from 'react-redux';

function ListDisplay (props) {
    return (
        
        <div>
            <table>
                <thead>
                    <tr>
                        <th>S. No</th>
                        <th>Name</th>
                        <th>Birthday</th>
                    </tr>
                </thead>
                <tbody>
                    { props.birthDayList <= 0 ? 
                        <tr>
                            <td colSpan={3}>List Empty</td>
                        </tr>
                        :
                        props.birthDayList.map((item) => 
                            <tr key={ item.Sno }>
                                <td>{ item.Sno }</td>
                                <td>{ item.Name }</td>
                                <td>{ item.Date }</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

function mapStateToProps (state) {
    return {
        birthDayList: state.birthdays
    }
}

export default connect(mapStateToProps)(ListDisplay);