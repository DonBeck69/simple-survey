import { Question } from "./Question";

export class Survey {
    public constructor (){
        this.Questions = new Array<Question>();
    }

    public SurveyName: string;
    public Questions: Question[];


}