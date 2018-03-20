import { Question } from "./Question";
//import * as moment from 'moment/min/moment.min';

export class Survey {
    public constructor (){
        this.Questions = new Array<Question>();
    }

    public SurveyName: string;
    public SurveyData: string;
    public Description: string;
    public Created: Date;
    public Questions: Question[];
}