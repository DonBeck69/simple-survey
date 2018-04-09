

export class Results {
    public constructor(init?: Partial<Results>) {
        Object.assign(this, init);
    }

    public ResultsId: number;
    public UserDataId: number;
    public AnswersGiven: string;
    public Started: string;
    public Completed: string;
}