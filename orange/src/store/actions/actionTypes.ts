export const userConstants = {
  SIGNUP_SUCCESS: 'SIGNUP_SUCCESS', // 회원 인증 메일이 전송되었습니다.
  SIGNUP_WAITING: 'SIGNUP_WAITING', // 이메일 인증을 완료해주세요.
  SIGNUP_FAILURE: 'SIGNUP_FAILURE', // 회원가입을 실패했습니다. 다시 시도해주세요.
  SIGNUP_FAILURE_AUTHENTICATION: 'SIGNUP_FAILURE_AUTHENTICATION', // 회원 인증에 문제가 있습니다. 다시 시도해주세요.
  SIGNUP_FAILURE_USERNAME: 'SIGNUP_FAILURE_USERNAME', // 이미 등록된 이름입니다.
  SIGNUP_FAILURE_EMAIL: 'SIGNUP_FAILURE_EMAIL', // 이미 등록된 이메일입니다.
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_FAILURE: 'LOGIN_FAILURE',
  LOGIN_FAILURE_INACTIVE: 'LOGIN_FAILURE_INACTIVE', // 회원 인증을 완료해주세요!
  LOGIN_FAILURE_INFO: 'LOGIN_FAILURE_INFO', // 잘못된 이름 또는 비밀번호입니다.
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'LOGOUT_FAILURE',
  GET_ME_SUCCESS: 'GET_ME_SUCCESS',
  GET_ME_FAILURE: 'GET_ME_FAILURE',
};

export const necessityConstants = {
  CREATE_NECESSITYPLACE_SUCCESS: 'CREATE_NECESSITYPLACE_SUCCESS',
  CREATE_NECESSITYPLACE_FAILURE: 'CREATE_NECESSITYPLACE_FAILURE',
  CREATE_NECESSITYPLACE_FAILURE_NAME: 'CREATE_NECESSITYPLACE_FAILURE_NAME',
  REMOVE_NECESSITYPLACE_SUCCESS: 'REMOVE_NECESSITYPLACE_SUCCESS',
  REMOVE_NECESSITYPLACE_FAILURE: 'REMOVE_NECESSITYPLACE_FAILURE',
  GET_HOUSE_SUCCESS: 'GET_HOUSE_SUCCESS',
  GET_HOUSE_FAILURE: 'GET_HOUSE_FAILURE',
  COUNT_NECESSITYPLACE_SUCCESS: 'COUNT_NECESSITYPLACE_SUCCESS',
  COUNT_NECESSITYPLACE_FAILURE: 'COUNT_NECESSITYPLACE_FAILURE',
  UPDATE_NECESSITYPLACE_SUCCESS: 'UPDATE_NECESSITYPLACE_SUCCESS',
  UPDATE_NECESSITYPLACE_FAILURE: 'UPDATE_NECESSITYPLACE_FAILURE',
  CREATE_PLACE_SUCCESS: 'CREATE_PLACE_SUCCESS',
  CREATE_PLACE_FAILURE: 'CREATE_PLACE_FAILURE',
  RENAME_PLACE_SUCCESS: 'RENAME_PLACE_SUCCESS',
  RENAME_PLACE_FAILURE: 'RENAME_PLACE_FAILURE',
  RENAME_PLACE_FAILURE_MEMBER: 'RENAME_PLACE_FAILURE_MEMBER',
  RENAME_PLACE_FAILURE_NOT_FOUND: 'RENAME_PLACE_FAILURE_NOT_FOUND',
  REMOVE_PLACE_SUCCESS: 'REMOVE_PLACE_SUCCESS',
  REMOVE_PLACE_FAILURE_LEADER: 'REMOVE_PLACE_FAILURE_LEADER',
  REMOVE_PLACE_FAILURE_MEMBER: 'REMOVE_PLACE_FAILURE_MEMBER',
  REMOVE_PLACE_FAILURE_NOT_FOUND: 'REMOVE_PLACE_FAILURE_NOT_FOUND',
  REMOVE_PLACE_FAILURE: 'REMOVE_PLACE_FAILURE',
};

export const houseConstants = {
  GET_HOUSE_SUCCESS: 'GET_HOUSE_SUCCESS',
  GET_HOUSE_FAILURE: 'GET_HOUSE_FAILURE',
  INVITE_HOUSE_SUCCESS: 'INVITE_HOUSE_SUCCESS', // 멤버 초대 메일이 전송되었습니다.
  INVITE_HOUSE_FAILURE: 'INVITE_HOUSE_FAILURE', // 멤버 초대를 실패했습니다. 다시 시도해주세요.
  INVITE_HOUSE_FAILURE_AUTHENTICATION: 'INVITE_HOUSE_FAILURE_AUTHENTICATION', // 멤버 초대 메일에 문제가 있습니다. 다시 시도해주세요.
  INVITE_HOUSE_FAILURE_EMAIL: 'INVITE_HOUSE_FAILURE_EMAIL', // 오렌지농장에 등록되지 않은 이메일입니다.
  INVITE_HOUSE_FAILURE_LEADER: 'INVITE_HOUSE_FAILURE_LEADER', // Leader만 초대장을 전송할 수 있습니다.
  INVITE_HOUSE_FAILURE_ME: 'INVITE_HOUSE_FAILURE_ME', // 자기 자신은 초대할 수 없습니다.
  INVITE_HOUSE_FAILURE_USERNAME: 'INVITE_HOUSE_FAILURE_USERNAME', // 이미 초대된 멤버입니다.
  INVITE_HOUSE_FAILURE_INACTIVE_USER: 'INVITE_HOUSE_FAILURE_INACTIVE_USER', // 우선 회원 인증을 완료해야 합니다.
  LEAVE_HOUSE_SUCCESS: 'LEAVE_HOUSE_SUCCESS', // Dobby is Free!
  LEAVE_HOUSE_FAILURE: 'LEAVE_HOUSE_FAILURE',
  LEAVE_HOUSE_FAILURE_LEADER: 'LEAVE_HOUSE_FAILURE_LEADER', // Leader는 권한 위임 전까지는 House를 떠날 수 없습니다.
  TOSS_LEADER_SUCCESS: 'TOSS_LEADER_SUCCESS', // Leader가 변경되었습니다.
  TOSS_LEADER_FAILURE: 'TOSS_LEADER_FAILURE',
  TOSS_LEADER_FAILURE_ME: 'TOSS_LEADER_FAILURE_ME', // 자기 자신에게는 Leader를 양도할 수 없습니다.
  TOSS_LEADER_FAILURE_LEADER: 'TOSS_LEADER_FAILURE_LEADER', // Leader만 다른 사람에게 Leader를 양도할 수 있습니다.
};
