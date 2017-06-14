import * as _debug from 'debug';

_debug.enable('algolia:*');
const debug = _debug('algolia:*');

/**
 * Log a message for logging purposes
 */
export default function log(message: string) {
  debug(message);
}
