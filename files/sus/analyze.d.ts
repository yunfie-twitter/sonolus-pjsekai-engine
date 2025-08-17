export type TimeScaleChangeObject = {
    tick: number;
    timeScale: number;
};
export type BpmChangeObject = {
    tick: number;
    bpm: number;
};
export type NoteObject = {
    tick: number;
    lane: number;
    width: number;
    type: number;
};
export type SlideObject = {
    type: number;
    notes: NoteObject[];
};
export type Score = {
    offset: number;
    ticksPerBeat: number;
    timeScaleChanges: TimeScaleChangeObject[];
    bpmChanges: BpmChangeObject[];
    tapNotes: NoteObject[];
    directionalNotes: NoteObject[];
    slides: SlideObject[];
};
export declare const analyze: (sus: string) => Score;
