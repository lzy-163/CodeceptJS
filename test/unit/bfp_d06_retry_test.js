const fs = require('node:fs');
const os = require('node:os');
const path = require('node:path');

describe('D06 controlled retry input', () => {
  it('fails only on the first invocation of the suite', () => {
    const marker = path.join(process.env.RUNNER_TEMP || os.tmpdir(), 'bfp-0e19b48d7cd2-attempt');
    if (!fs.existsSync(marker)) {
      fs.writeFileSync(marker, 'first attempt completed');
      throw new Error('BFP_D06_CONTROLLED_FIRST_ATTEMPT_FAILURE');
    }
    console.log('BFP_D06_CONTROLLED_SECOND_ATTEMPT_REACHED');
  });
});
