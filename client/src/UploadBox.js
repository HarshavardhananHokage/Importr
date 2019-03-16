import React from 'react';
import { connect } from 'react-redux';
import XLSX from 'xlsx';
import * as actions from './redux/action';

function UploadBox (props) {
    function handleSelectedFile(e) {
        props.updateFile(e.target.files[0]);
    }

    function handleUpload() {
        let reader = new FileReader();
        reader.readAsBinaryString(props.file);
        reader.onload = (e) => {
            let binExcel = e.target.result;
            const workbook = XLSX.read(binExcel, { type: 'binary' });
            const wsName = workbook.SheetNames[0];
            const ws = workbook.Sheets[wsName];
            const data = XLSX.utils.sheet_to_json(ws);
            props.updateBirthdayList(data);
        }
    }

    return (
        <div>
            <input type="file" name="birthdayFile" id="birFile" onChange={ handleSelectedFile }/>
            <button type="submit" onClick={ handleUpload }>Submit File</button>
        </div>
    )
}

function mapDispatchToProps (dispatch) {
    return {
        updateFile: (fileName) => dispatch(actions.updateFileSelected(fileName)),
        updateBirthdayList: (birthList) => dispatch(actions.updateBirthdayList(birthList))
    }
}

function mapStateToProps(state) {
    return {
        file: state.file
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UploadBox);