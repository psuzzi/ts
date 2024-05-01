import { hello } from './helper.js';
import fs from 'fs';
import os from 'os';

fs;
var user = os.userInfo().username
var dir = process.cwd()
console.log(`Hi ${user} at ${dir}`)
