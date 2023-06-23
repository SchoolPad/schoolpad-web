import React, { useState } from 'react'

// Assets
import PrintImage from '../../../../images/print-icon.svg';
import ExcelImage from '../../../../images/excel-icon.svg';
import Layout from '../../../../components/Layouts/Layout';
import SubHeader from '../../../../components/ScreensHeader/SubHeader';
import ExportHeader from '../../../../components/ScreensHeader/ExportHeader';
import TableStopMaster from '../../../../components/Table Stops/TableStopMaster';
import AddStopMaster from './components/AddStopMaster';
import StudentListTable from './components/StudentListTable';
import ChangeHistory from './components/ChangeHistory';



const TransportStopMaster = () => {
  const [showModal, setShowModal] = useState(false);
  const [showstudentList, setShowStudentList] = useState(false);
  const [showchangeHistory, setShowChangeHistory] = useState(false);

  const hideModal = () => {
    setShowModal(false);
  }

  const hideStudentListModal = () => {
    setShowStudentList(false);
  }

  const hideChangeHistorytModal = () => {
    setShowChangeHistory(false);
  }



  return (
    <Layout>
      {/* <ItemsNotFound/> */}
      <SubHeader 
      heading='Transport Stop Master' 
      type='horizontal' 
      buttonAdd='Add New Stop'
      buttonOrders='Order Stop(s)'  
      onClick={() => setShowModal(!showModal)} 
      buttonOrderDragList={() => setShowChangeHistory(!showchangeHistory)}
      />

      <ExportHeader
        smallHeading='All Stops'
        smallHeding2='(202 Records)'
        PrintIcon={PrintImage}
        Excelicon={ExcelImage}
      />

      <TableStopMaster
        heading='Child Name'
        onClick={() => setShowStudentList(!showstudentList)}
      />

      {/* Add Stop Master Modal */}
      <AddStopMaster
        show={showModal}
        handleClose={hideModal}
      />

      {/* Student List */}
      <StudentListTable
        show={showstudentList}
        handleClose={hideStudentListModal}
      />

      {/* Change History */}
      <ChangeHistory
        show={showchangeHistory}
        handleClose={hideChangeHistorytModal}
      />
    </Layout>

  )
}

export default TransportStopMaster;