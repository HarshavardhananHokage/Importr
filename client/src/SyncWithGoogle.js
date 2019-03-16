import React from 'react';
import { connect } from 'react-redux';
import * as actions from './redux/action';

function SyncWithGoogle (props) {

    function handleSyncSubmit () {
        props.syncWithGoogle();
    }

    return (
        <div>
            <button type="submit" onClick={ handleSyncSubmit }>Sync With Google Calendar</button>
        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return {
        syncWithGoogle: () => dispatch(actions.syncWithGoogle())
    }
}

export default connect(null, mapDispatchToProps)(SyncWithGoogle);