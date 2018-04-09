import { Question } from "./Question";

export class Survey {
    public constructor () {
        this.Questions = new Array<Question>();
    }

    public SurveyId: number;
    public SurveyName: string;
    public SurveyData: string;
    public Description: string;
    public Created: string;
    public Questions: Question[];
}