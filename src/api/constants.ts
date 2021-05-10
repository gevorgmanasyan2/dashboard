import configENV from '../config/config.sample.json'

export const baseAPIURL = configENV.REACT_APP_API_URL
export const devicesCountAPI = '/devices/count_active'
export const droneCountAPI = '/drones/count_active'
export const flightCountAPI = `/flights/count_by_month/${new Date().getMonth()}`
export const userCountAPI = '/users/count_active'
export const waiverAPI = '/waivers'
export const waiverGetAPI = '/waiver'
export const waiverDocumentAPI = '/waiver/'
export const waiverUploadFilesAPI = '/upload_waiver_request_files/'
export const waiverTypesAPI = '/waiver_types?where='
export const waiverLibCategoryAPI = '/waiver_library_categories'
export const waiverLibItemImageAPI = '/waiver_library_item/'
export const waiverStatusAPI = '/waiver_response/'
export const deviceUserRole = 'device_user'
export const customerAdminUserRole = 'customer_admin'
export const waiverUserRole = 'waiver_user'
export const locationAPI = '/location'
export const allLocationsAPI = '/locations'
export const messageAPI = '/message'
export const messagesAPI = '/messages?where='
export const getUserAPI = '/user/'
export const verifyAPI = '/verify'
export const questionnaireResponseAPI = '/questionnaire_response/'
export const uploadQuestionnaireFilesAPI = '/upload_questionnaire_files/'
export const fetchQuestionnaireFilesAPI = '/questionnaire_files/'
export const fetchQuestionsAPI = '/questionnaire_questions/'

export const config = () => {
  sessionStorage.getItem('decryptedToken')
  const token = sessionStorage.decryptedToken && JSON.parse(sessionStorage.decryptedToken).token
  return {
    headers: {
      'Content-Type': 'application/json',
      Authorization: `${token}`,
    },
  }
}

