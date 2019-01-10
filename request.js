import {redraw} from './redraw'
import setup from 'mithril/request/request'
const requestService = setup(window, Promise)
requestService.setCompletionCallback(redraw)
export const {request, jsonp} = requestService