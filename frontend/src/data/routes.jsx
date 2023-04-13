const BASE_URL_LOCAL_FORBACKEND = process.env.REACT_APP_BASE_URL_LOCAL_FORBACKEND;


/**
 * List all endpoints against the back-end for STARTUPS
 */
export const path_getHomes =  `${BASE_URL_LOCAL_FORBACKEND}/`;
export const path_createHome =  `${BASE_URL_LOCAL_FORBACKEND}/create`;
export const path_deleteHome = (id) => `${BASE_URL_LOCAL_FORBACKEND}/${id}`;

/** Others path */