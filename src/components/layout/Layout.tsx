import React, { FC } from 'react'
import Header from '../header/Header'
import Footer from './../footer/Footer'
import { Switch, Route, Redirect } from 'react-router-dom'
import MyDashboard from '../myDashboard/MyDashboard'
import CasiaDeviceConfig from '../casia-devices/casia-device-config/CasiaDeviceConfig'
import CasiaDeviceForm from '../casia-devices/casia-device-form/CasiaDeviceForm'
import CasiaDeviceEdit from '../casia-devices/casia-device-edit/CasiaDeviceEdit'
import RegulatoryLibrary from '../myDashboard/regulatory-library/RegulatoryLibrary'
import AddLocation from '../myDashboard/location/add-location/AddLocation'
import Locations from './../myDashboard/location/locations/Locations'
import NotFound from '../not-found-page/NotFound'
import SearchRegulatoryPermission from '../myDashboard/regulatory/search-regulatory-permission/SearchRegulatoryPermission'
import RegulatoryPermissionList from '../myDashboard/regulatory/regulatory-permisson/RegulatoryPermissions'
import CompleteDocument from '../myDashboard/regulatory/complete-documentation/CompleteDocument'
import MyAccount from '../myDashboard/my-account/MyAccount'
import NewRegulatoryPermission from '../myDashboard/regulatory/new-regulatory-permission/NewRegulatoryPermission'
import Message from '../myDashboard/regulatory/complete-documentation/message/Message'
import Upload from './../myDashboard/regulatory/complete-documentation/upload/Upload'
import QuestionnaireList from '../myDashboard/regulatory/complete-documentation/questionnaireList/QuestionnaireList'
import UploadedFilesInfo from '../myDashboard/regulatory/complete-documentation/upload/uploaded-files/uploaded-files-info/UploadedFilesInfo'

const Layout: FC = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={MyDashboard} />
        <Route exact path="/mydashboard" component={MyDashboard} />
        <Route exact path="/search-regulatory-permission" component={SearchRegulatoryPermission} />
        <Route exact path="/casiadevice" component={CasiaDeviceConfig} />
        <Route exact path="/addlocation" component={AddLocation} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/casiadevice-form" component={CasiaDeviceForm} />
        <Route exact path="/casiadevice-edit" component={CasiaDeviceEdit} />
        <Route exact path="/regulatory-library" component={RegulatoryLibrary} />
        <Route exact path="/regulatory-library-detail" component={RegulatoryLibrary} />
        <Route exact path="/message/:id" component={Message} />
        <Route exact path="/regulatory-permissions" component={RegulatoryPermissionList} />
        <Route exact path="/new-regulatory-permission" component={NewRegulatoryPermission} />
        <Route exact path="/complete-document/questionnaire/:id" component={QuestionnaireList} />
        <Route exact path="/complete-document/upload/:id" component={Upload} />
        <Route exact path="/complete-document/upload-file-info/:id" component={UploadedFilesInfo} />
        <Route exact path="/regulatory-complete-document/:id" component={CompleteDocument} />
        <Route exact path="/my-account" component={MyAccount} />
        <Route exact path="/404" component={NotFound} />
        <Redirect exact path="/login/:token" to={sessionStorage.location} />
      </Switch>
      <Footer />
    </>
  )
}

export default Layout