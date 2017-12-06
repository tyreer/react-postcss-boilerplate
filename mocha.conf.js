/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import jsdom from 'jsdom';
import chai from 'chai';

configure({ adapter: new Adapter() });

// global setup
global.assert = chai.assert;
global.expect = chai.expect;
global.chai   = chai;

// dom object in node
const { JSDOM } = jsdom;
const { document } = (new JSDOM('')).window;

// dom setup
global.navigator = {
  userAgent: 'node.js',
  platform: [],
};
global.window = document.defaultView;

// chai setup
chai.use(require('chai-enzyme')());
