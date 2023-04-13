const BASE_URL_LOCAL_FORBACKEND = process.env.REACT_APP_BASE_URL_LOCAL_FORBACKEND;

/**
 * List all endpoints against the back-end for MATCHES
 */

/** MATCHES READ */
export const path_getMatchesById =  `${BASE_URL_LOCAL_FORBACKEND}/matches`;

/**
 * List all endpoints against the back-end for EVENTS
 */
export const path_getStartups =  `${BASE_URL_LOCAL_FORBACKEND}/`;
export const path_createStartup =  `${BASE_URL_LOCAL_FORBACKEND}/create`;


/** Others path */
export const pathToScan = "https://goerli.etherscan.io/tx"


/**
 * List all endpoints against the back-end for USER
 */
/** User READ */
export const path_getUser = `${BASE_URL_LOCAL_FORBACKEND}/user/wallet`;