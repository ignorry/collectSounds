import { AppThunk } from "../../redux";
import { getVideo } from "../../redux/slices/saved";
import { getDurationFromMs } from "../getDuration";

/**
 * calculates length of all items in queue
 * @returns {string} parsed duration line
 */
export const getQueueLength = (): AppThunk => ( dispatch, getState: Function ) => 
  getDurationFromMs( getState().queue.data.map( ( item: any ) => getVideo( getState().saved, item ) ).reduce( ( sum: any, item: any ) => 
    sum + item.duration, 0
  ));