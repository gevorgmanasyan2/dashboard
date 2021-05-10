export type docsType = {
  stage_id: number | string
  stages: stageType
  change_logs: changeLogsType[]
  waiver_requests: requestInfoType[]
  questionnaires: questionnairesType[]
  unread_message_count: number
  percent_completion: number
  name: string
}
export type changeLogsType = {
  created_date: string
  description: string
  edit_by_user_id: number
  edit_by_user_name: string
  edit_date: string
  id: number
  waiver_id: number
}

export type stageType = {
  badge_style: string
  fa_class: string
  header_text: string
  title: string
  title_description: string
  value: string
}

export type requestInfoType = {
  id: number
  waiver_id: number
  created_by_user_name: string
  created_date: string
  name: string
  description: string
  questionnaire_response_status_name: string
}
export type questionnairesType = {
  created_date: string
  description: string
  edit_date: null
  enabled: boolean
  external_link: string
  first_question_assistance_question_id: null
  first_question_assistance_question_response_id: null
  id: number
  instructions: string
  is_active: boolean
  name: string
  question_assistance_open_count: number
  questionnaire_response_id: number
  questionnaire_response_status_id: number
  questionnaire_response_status_name: string
  questionnaire_type_id: number
  sort_order: number
  stage_id: number
}
