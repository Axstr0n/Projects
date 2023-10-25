
const ST = {
    name: 'Solarne tehnologije',
    abbreviation: 'ST',
    canShow: true,
    lecture: {
        type: 'P',
        day: 'monday',
        timeStart: '14:00',
        timeEnd: '16:00',
        classroom: 'III/4'
    },
    exercises: {
        S1: {
            canShow: true,
            type: 'VL',
            group: 'S1',
            day: 'wednesday',
            timeStart: '18:00',
            timeEnd: '20:00'
        },
        S2: {
            canShow: true,
            type: 'VL',
            group: 'S2',
            day: 'thursday',
            timeStart: '12:00',
            timeEnd: '14:00'
        },
        S3: {
            canShow: true,
            type: 'VL',
            group: 'S3',
            day: 'thursday',
            timeStart: '8:00',
            timeEnd: '10:00'
        },
        S4: {
            canShow: true,
            type: 'VL',
            group: 'S4',
            day: 'thursday',
            timeStart: '10:00',
            timeEnd: '12:00'
        },
        S5: {
            canShow: true,
            type: 'VL',
            group: 'S5',
            day: 'monday',
            timeStart: '16:00',
            timeEnd: '18:00'
        },
        S6: {
            canShow: true,
            type: 'VL',
            group: 'S6',
            day: 'monday',
            timeStart: '8:00',
            timeEnd: '10:00'
        },
        S7: {
            canShow: true,
            type: 'VL',
            group: 'S7',
            day: 'monday',
            timeStart: '10:00',
            timeEnd: '12:00'
        },
        S8: {
            canShow: true,
            type: 'VL',
            group: 'S8',
            day: 'friday',
            timeStart: '16:00',
            timeEnd: '18:00'
        },
    }
};

function CreateSubjectSelect(subject){
    // Create subject select menu in subject selector
    var subjectSelect = document.createElement('div');
    subjectSelect.classList.add('subject-select');
    subjectSelect.setAttribute('id', `${subject.name}`);
    var subjectTitleToggle = document.createElement('div');
    subjectTitleToggle.classList.add('subject-title-toggle');
    var subjectTitle = document.createElement('div');
    subjectTitle.classList.add('subject-title');
    subjectTitle.innerHTML = subject.name;
    var subjectToggleButton = document.createElement('button');
    subjectToggleButton.classList.add('subject-toggle-button');
    subjectToggleButton.setAttribute('id', `${subject.abbreviation}-button`);
    subjectToggleButton.innerHTML = 'X';
    var subjectColorInput = document.createElement('input');
    subjectColorInput.classList.add('subject-color-input');
    subjectColorInput.setAttribute('id', `${subject.abbreviation}-color-picker`);
    subjectColorInput.type = 'color';
    var subjectGroupToggle = document.createElement('div');
    subjectGroupToggle.classList.add('subject-group-toggle');

    subjectTitleToggle.appendChild(subjectTitle);
    subjectTitleToggle.appendChild(subjectToggleButton);
    subjectSelect.appendChild(subjectTitleToggle);
    subjectSelect.appendChild(subjectColorInput);
    subjectSelect.appendChild(subjectGroupToggle);

    var exercises = subject.exercises;
    for (const exerciseKey in exercises){
        if (exercises.hasOwnProperty(exerciseKey)) {
            var exercise = exercises[exerciseKey]
            console.log(`${exerciseKey}: ${exercise}`);
            var exerciseButton = document.createElement('button');
            exerciseButton.classList.add('subject-group-toggle-button');
            exerciseButton.setAttribute('id', `${subject.abbreviation}-${exercise.group}-button`);
            exerciseButton.innerHTML = exercise.group;
            exerciseButton.addEventListener('click', function(){
                ToggleButton(exerciseButton, exercise);
            });
            subjectGroupToggle.appendChild(exerciseButton);
          }
    }
    document.getElementById('subject-selector').appendChild(subjectSelect);
}
CreateSubjectSelect(ST)

function ToggleButton(button, exercise){
    var canShow = exercise.canShow;
    if(canShow === true){
        exercise.canShow = false;
        button.classList.remove('active-button');
    }
    else if(canShow === false){
        exercise.canShow = true
        button.classList.add('active-button');
    }
}

// #region DEFINE BUTTONS INPUTS EVENTS
//#region Programski algoritmi in protokoli PAP
const PAP_button = document.getElementById('PAP-button');
const PAP_S1_button = document.getElementById('PAP-S1-button');
const PAP_S2_button = document.getElementById('PAP-S2-button');
const PAP_S3_button = document.getElementById('PAP-S3-button');
const PAP_buttons = [PAP_button, PAP_S1_button, PAP_S2_button, PAP_S3_button]
PAP_buttons.forEach(button => {
    button.addEventListener('click', function(){
        ChangeActiveState(button)
    })
});
const PAP_color_picker = document.getElementById('PAP-color-picker');
PAP_color_picker.addEventListener('input', Update)
//#endregion
//#region Mikroprocesorska krmilja MK
const MK_button = document.getElementById('MK-button');
const MK_S1_button = document.getElementById('MK-S1-button');
const MK_S2_button = document.getElementById('MK-S2-button');
const MK_S3_button = document.getElementById('MK-S3-button');
const MK_S4_button = document.getElementById('MK-S4-button');
const MK_buttons = [MK_button, MK_S1_button, MK_S2_button, MK_S3_button, MK_S4_button]
MK_buttons.forEach(button => {
    button.addEventListener('click', function(){
        ChangeActiveState(button)
    })
});
const MK_color_picker = document.getElementById('MK-color-picker');
MK_color_picker.addEventListener('input', Update)
//#endregion
//#region Robotski sistemi RS
const RS_button = document.getElementById('RS-button');
const RS_S1_button = document.getElementById('RS-S1-button');
const RS_S2_button = document.getElementById('RS-S2-button');
const RS_S3_button = document.getElementById('RS-S3-button');
const RS_S4_button = document.getElementById('RS-S4-button');
const RS_buttons = [RS_button, RS_S1_button, RS_S2_button, RS_S3_button, RS_S4_button]
RS_buttons.forEach(button => {
    button.addEventListener('click', function(){
        ChangeActiveState(button)
    })
});
const RS_color_picker = document.getElementById('RS-color-picker');
RS_color_picker.addEventListener('input', Update)
//#endregion
//#region Mikroizdelovalne tehnologije MT
const MT_button = document.getElementById('MT-button');
const MT_S1_button = document.getElementById('MT-S1-button');
const MT_S2_button = document.getElementById('MT-S2-button');
const MT_S3_button = document.getElementById('MT-S3-button');
const MT_S4_button = document.getElementById('MT-S4-button');
const MT_S5_button = document.getElementById('MT-S5-button');
const MT_S6_button = document.getElementById('MT-S6-button');
const MT_S7_button = document.getElementById('MT-S7-button');
const MT_buttons = [MT_button, MT_S1_button, MT_S2_button, MT_S3_button, MT_S4_button, MT_S5_button, MT_S6_button, MT_S7_button]
MT_buttons.forEach(button => {
    button.addEventListener('click', function(){
        ChangeActiveState(button)
    })
});
const MT_color_picker = document.getElementById('MT-color-picker');
MT_color_picker.addEventListener('input', Update)
//#endregion
//#region Napredni odrezovalni procesi NOP
const NOP_button = document.getElementById('NOP-button');
const NOP_VP_button = document.getElementById('NOP-VP-button');
const NOP_buttons = [NOP_button, NOP_VP_button]
NOP_buttons.forEach(button => {
    button.addEventListener('click', function(){
        ChangeActiveState(button)
    })
});
const NOP_color_picker = document.getElementById('NOP-color-picker');
NOP_color_picker.addEventListener('input', Update)
//#endregion
// #endregion


function Update(){
    console.log('------------------')
    //DefineButtonsInputsAndEvents();
    let allLessons = DefineData();
    let selectedLessons = FilterData(allLessons);
    let lessonsByDay = SortLessonsByDay(selectedLessons);
    AddLessonsToTimetable(lessonsByDay);

    console.log("All updated")
}
let buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    ChangeActiveState(button)
});

// ADDS / REMOVES 'active-button' CLASS
function ChangeActiveState(button){
    if(button.classList.contains('active-button')){
        button.classList.remove('active-button');
    }
    else{
        button.classList.add('active-button');
    }
    Update();
}
// DEFINE DATA - RETURNS ALL LESSONS - [lessons]
function DefineData(){
    // DATA
    let PAP_bg_color = PAP_color_picker.value;
    let PAP_P = ['PAP', 'Programski algoritmi in protokoli', 'P', '', '8:00', '10:00', 'III/4', 'PON', PAP_bg_color];
    let PAP_S1 = ['PAP', 'Programski algoritmi in protokoli', 'VL', 'S1', '8:00', '10:00', 'SII-82', 'ČET', PAP_bg_color];
    let PAP_S2 = ['PAP', 'Programski algoritmi in protokoli', 'VL', 'S2', '10:00', '12:00', 'SII-82', 'ČET', PAP_bg_color];
    let PAP_S3 = ['PAP', 'Programski algoritmi in protokoli', 'VL', 'S3', '12:00', '14:00', 'SII-82', 'ČET', PAP_bg_color];
    let PAP = [PAP_P, PAP_S1, PAP_S2, PAP_S3];

    let MK_bg_color = MK_color_picker.value;
    let MK_P = ['MK', 'Mikroprocesorska krmilja', 'P', '', '14:00', '16:00', 'III/4', 'TOR', MK_bg_color];
    let MK_S1 = ['MK', 'Mikroprocesorska krmilja', 'VL', 'S1', '14:00', '16:00', 'SP-46A', 'PET', MK_bg_color];
    let MK_S2 = ['MK', 'Mikroprocesorska krmilja', 'VL', 'S2', '8:00', '10:00', 'SP-46A', 'TOR', MK_bg_color];
    let MK_S3 = ['MK', 'Mikroprocesorska krmilja', 'VL', 'S3', '10:00', '12:00', 'SP-46A', 'TOR', MK_bg_color];
    let MK_S4 = ['MK', 'Mikroprocesorska krmilja', 'VL', 'S4', '12:00', '14:00', 'SP-46A', 'TOR', MK_bg_color];
    let MK = [MK_P, MK_S1, MK_S2, MK_S3, MK_S4];

    let RS_bg_color = RS_color_picker.value;
    let RS_P = ['RS', 'Robotski sistemi', 'P', '', '8:00', '10:00', 'III/4', 'SRE', RS_bg_color];
    let RS_S1 = ['RS', 'Robotski sistemi', 'VL', 'S1', '12:00', '14:00', 'SP-45A', 'PET', RS_bg_color];
    let RS_S2 = ['RS', 'Robotski sistemi', 'VL', 'S2', '8:00', '10:00', 'SP-45A', 'PET', RS_bg_color];
    let RS_S3 = ['RS', 'Robotski sistemi', 'VL', 'S3', '10:00', '12:00', 'SP-45A', 'PET', RS_bg_color];
    let RS_S4 = ['RS', 'Robotski sistemi', 'VL', 'S4', '16:00', '18:00', 'SP-45A', 'TOR', RS_bg_color];
    let RS = [RS_P, RS_S1, RS_S2, RS_S3, RS_S4];

    let MT_bg_color = MT_color_picker.value;
    let MT_P = ['MT', 'Mikroizdelovalne tehnologije', 'P', '', '10:00', '12:00', 'III/2', 'SRE', MT_bg_color];
    let MT_S1 = ['MT', 'Mikroizdelovalne tehnologije', 'VL', 'S1', '12:00', '14:00', 'SP-39', 'ČET', MT_bg_color];
    let MT_S2 = ['MT', 'Mikroizdelovalne tehnologije', 'VL', 'S2', '14:00', '16:00', 'SP-39', 'TOR', MT_bg_color];
    let MT_S3 = ['MT', 'Mikroizdelovalne tehnologije', 'VL', 'S3', '14:00', '16:00', 'SP-39', 'PON', MT_bg_color];
    let MT_S4 = ['MT', 'Mikroizdelovalne tehnologije', 'VL', 'S4', '16:00', '18:00', 'SP-39', 'PON', MT_bg_color];
    let MT_S5 = ['MT', 'Mikroizdelovalne tehnologije', 'VL', 'S5', '8:00', '10:00', 'SP-39', 'PET', MT_bg_color];
    let MT_S6 = ['MT', 'Mikroizdelovalne tehnologije', 'VL', 'S6', '12:00', '14:00', 'SP-39', 'TOR', MT_bg_color];
    let MT_S7 = ['MT', 'Mikroizdelovalne tehnologije', 'VL', 'S7', '16:00', '18:00', 'SP-39', 'TOR', MT_bg_color];
    let MT = [MT_P, MT_S1, MT_S2, MT_S3, MT_S4, MT_S5, MT_S6, MT_S7];

    let NOP_bg_color = NOP_color_picker.value;
    let NOP_P = ['NOP', 'Napredni odrezovalni procesi', 'P', '', '12:00', '14:00', 'II/5', 'PON', NOP_bg_color];
    let NOP_VP = ['NOP', 'Napredni odrezovalni procesi', 'VP', '', '10:00', '12:00', 'III/4', 'PET', NOP_bg_color];
    let NOP = [NOP_P, NOP_VP]

    let lessons = [];
    PAP.forEach(lesson => {
        lessons.push(lesson)
    });
    MK.forEach(lesson => {
        lessons.push(lesson)
    });
    RS.forEach(lesson => {
        lessons.push(lesson)
    });
    MT.forEach(lesson => {
        lessons.push(lesson)
    });
    NOP.forEach(lesson => {
        lessons.push(lesson)
    });
    //console.log(`Lesson count: ${lessons.length} (array subjects)`)
    console.log('DefineData: done')
    return lessons
}
// FILTER ONLY SELECTED - RETURNS ALL SELECTED LESSONS - [selected lessons]
function FilterData(allLessons){
    let selectedLessons = [];

    let PAP_can_show = PAP_button.classList.contains('active-button')
    let PAP_S1_can_show = PAP_S1_button.classList.contains('active-button')
    let PAP_S2_can_show = PAP_S2_button.classList.contains('active-button')
    let PAP_S3_can_show = PAP_S3_button.classList.contains('active-button')

    let MK_can_show = MK_button.classList.contains('active-button')
    let MK_S1_can_show = MK_S1_button.classList.contains('active-button')
    let MK_S2_can_show = MK_S2_button.classList.contains('active-button')
    let MK_S3_can_show = MK_S3_button.classList.contains('active-button')
    let MK_S4_can_show = MK_S4_button.classList.contains('active-button')

    let RS_can_show = RS_button.classList.contains('active-button')
    let RS_S1_can_show = RS_S1_button.classList.contains('active-button')
    let RS_S2_can_show = RS_S2_button.classList.contains('active-button')
    let RS_S3_can_show = RS_S3_button.classList.contains('active-button')
    let RS_S4_can_show = RS_S4_button.classList.contains('active-button')

    let MT_can_show = MT_button.classList.contains('active-button')
    let MT_S1_can_show = MT_S1_button.classList.contains('active-button')
    let MT_S2_can_show = MT_S2_button.classList.contains('active-button')
    let MT_S3_can_show = MT_S3_button.classList.contains('active-button')
    let MT_S4_can_show = MT_S4_button.classList.contains('active-button')
    let MT_S5_can_show = MT_S5_button.classList.contains('active-button')
    let MT_S6_can_show = MT_S6_button.classList.contains('active-button')
    let MT_S7_can_show = MT_S7_button.classList.contains('active-button')

    let NOP_can_show = NOP_button.classList.contains('active-button')
    let NOP_VP_can_show = NOP_VP_button.classList.contains('active-button')

    allLessons.forEach(lesson => {
        let abbreviation = lesson[0]; // PAP MK RS
        let type = lesson[2]; // P VL
        let group = lesson[3]; // '' S1 S2

        if(abbreviation == 'PAP' && PAP_can_show == false) return;
        if(abbreviation == 'MK' && MK_can_show == false) return;
        if(abbreviation == 'RS' && RS_can_show == false) return;
        if(abbreviation == 'MT' && MT_can_show == false) return;
        if(abbreviation == 'NOP' && NOP_can_show == false) return;

        if(abbreviation == 'PAP' && group == 'S1' && PAP_S1_can_show == false) return;
        if(abbreviation == 'PAP' && group == 'S2' && PAP_S2_can_show == false) return;
        if(abbreviation == 'PAP' && group == 'S3' && PAP_S3_can_show == false) return;
        if(abbreviation == 'MK' && group == 'S1' && MK_S1_can_show == false) return;
        if(abbreviation == 'MK' && group == 'S2' && MK_S2_can_show == false) return;
        if(abbreviation == 'MK' && group == 'S3' && MK_S3_can_show == false) return;
        if(abbreviation == 'MK' && group == 'S4' && MK_S4_can_show == false) return;
        if(abbreviation == 'RS' && group == 'S1' && RS_S1_can_show == false) return;
        if(abbreviation == 'RS' && group == 'S2' && RS_S2_can_show == false) return;
        if(abbreviation == 'RS' && group == 'S3' && RS_S3_can_show == false) return;
        if(abbreviation == 'RS' && group == 'S4' && RS_S4_can_show == false) return;
        if(abbreviation == 'MT' && group == 'S1' && MT_S1_can_show == false) return;
        if(abbreviation == 'MT' && group == 'S2' && MT_S2_can_show == false) return;
        if(abbreviation == 'MT' && group == 'S3' && MT_S3_can_show == false) return;
        if(abbreviation == 'MT' && group == 'S4' && MT_S4_can_show == false) return;
        if(abbreviation == 'MT' && group == 'S5' && MT_S5_can_show == false) return;
        if(abbreviation == 'MT' && group == 'S6' && MT_S6_can_show == false) return;
        if(abbreviation == 'MT' && group == 'S7' && MT_S7_can_show == false) return;
        if(abbreviation == 'NOP' && type == 'VP' && NOP_VP_can_show == false) return;

        selectedLessons.push(lesson);
    });
    console.log('FilterData: done')
    return selectedLessons;
}
// SORT LESSONS BY DAY - RETURNS [[DAY],[DAY],[DAY],[DAY],[DAY]]
function SortLessonsByDay(lessons){
    let mondayLessons = [];
    let tuesdayLessons = [];
    let wednesdayLessons = [];
    let thursdayLessons = [];
    let fridayLessons = [];

    lessons.forEach(lesson => {
        let lessonDay = lesson[7];
        switch (lessonDay) {
            case 'PON':
                mondayLessons.push(lesson)
                break;
            case 'TOR':
                tuesdayLessons.push(lesson)
                break;
            case 'SRE':
                wednesdayLessons.push(lesson)
                break;
            case 'ČET':
                thursdayLessons.push(lesson)
                break;
            case 'PET':
                fridayLessons.push(lesson)
                break;
            default:
                console.log("Unknown DAY")
                break;
        };
    });
    console.log('SortLessonsByDay: done')
    /*console.log(`PON: ${mondayLessons}`)
    console.log(`TOR: ${tuesdayLessons}`)
    console.log(`SRE: ${wednesdayLessons}`)
    console.log(`ČET: ${thursdayLessons}`)
    console.log(`PET: ${fridayLessons}`)*/
    let lessonsByDay = [mondayLessons,tuesdayLessons,wednesdayLessons,thursdayLessons,fridayLessons]
    return lessonsByDay;
}
// 
function AddLessonsToTimetable(lessonsByDay){
    // Removes all children of Entries
    if(document.getElementById('entries') != null){
        let entries = document.getElementById('entries');
        while (entries.firstChild) {
            entries.removeChild(entries.firstChild);
        }
    }
    lessonsByDay.forEach(lessonsForDay => {
        let columns = ControlOverlapping(lessonsForDay)
        AddLessonsByDay(columns);
        /*columns.forEach(column => {
            AddLessonsByDay(column);
        });*/
    });
    console.log('AddLessonsToTimetable: done')
}
// INPUT - LESSONS FOR ONE DAY / RETURNS - ARRAY [[COL1],[COL2]]
function ControlOverlapping(lessons){
    let col1 = []
    let col2 = []
    let col3 = []
    let col4 = []
    let columns = [col1, col2, col3, col4]
    lessons.forEach(lesson => {
        let lessonStart = ConvertTime(lesson[4])
        let lessonEnd = ConvertTime(lesson[5])
        let isPlaced = false;
        for (let index = 0; index < columns.length; index++) {
            const column = columns[index];
            
            if(column.length == 0){
                column.push(lesson)
                isPlaced = true
                break;
            }
            let canPlace = true;

            for (let j = 0; j < column.length; j++) {
                const colLesson = column[j];
                let colLessonStart = ConvertTime(colLesson[4])
                let colLessonEnd = ConvertTime(colLesson[5])
                /*console.log(`Lesson start: ${lessonStart}`)
                console.log(`Lesson end: ${lessonEnd}`)
                console.log(`ColLesson start: ${colLessonStart}`)
                console.log(`ColLesson end: ${colLessonEnd}`)*/
                if(lessonStart == colLessonStart || lessonEnd == colLessonEnd){
                    canPlace = false
                    break
                }
                if(lessonStart > colLessonStart && lessonStart < colLessonEnd){
                    canPlace = false
                    break
                }
                if(lessonEnd > colLessonStart && lessonEnd < colLessonEnd){
                    canPlace = false
                    break
                }
            }
/*
            column.forEach(colLesson => {
                let colLessonStart = ConvertTime(colLesson[4])
                let colLessonEnd = ConvertTime(colLesson[4])
                if(lessonStart == colLessonStart || lessonEnd == colLessonEnd){
                    canPlace = false
                    return
                }
                if(lessonStart > colLessonStart && lessonStart < colLessonEnd){
                    canPlace = false
                    return
                }
                if(lessonEnd > colLessonStart && lessonEnd < colLessonEnd){
                    canPlace = false
                    return
                }
                
            });*/
            if(canPlace){
                column.push(lesson)
                break
            }
        }
        /*
        columns.forEach(column => {
            if(column.length == 0){
                column.push(lesson)
                isPlaced = true
                break;
            }
            let canPlace = true;
            column.forEach(colLesson => {
                let colLessonStart = ConvertTime(colLesson[4])
                let colLessonEnd = ConvertTime(colLesson[4])
                if(lessonStart == colLessonStart || lessonEnd == colLessonEnd){
                    canPlace = false
                    return
                }
                if(lessonStart > colLessonStart && lessonStart < colLessonEnd){
                    canPlace = false
                    return
                }
                if(lessonEnd > colLessonStart && lessonEnd < colLessonEnd){
                    canPlace = false
                    return
                }
                
            });
            if(canPlace){
                column.push(lesson)
            }
        });*/
    });
    /*
    console.log(`Col1: ${col1}`)
    console.log(`Col2: ${col2}`)
    console.log(`Col3: ${col3}`)
    console.log(`Col4: ${col4}`)*/
    
    for (let i = 0; i < columns.length; i++) {
        const col = columns[i];
        if(col.length == 0){
            columns.splice(i)
        }
        
    }
    console.log(columns)
    return columns
}
// INPUT - array of lessons for one day [[COL1],[COL2],[],[]] - DAY
function AddLessonsByDay(columnOfLessonsByDay){
    let numberOfColumns = columnOfLessonsByDay.length;
    for (let i = 0; i < columnOfLessonsByDay.length; i++) {
        const column = columnOfLessonsByDay[i];
        for (let j = 0; j < column.length; j++) {
            const lesson = column[j];
            AddLessonToTimetable(lesson, i, numberOfColumns)
        }
    }
}
//
function AddLessonToTimetable(lesson, offsetXMultiplier, numberOfColumns){
    let abbreviation = lesson[0];
    let title = lesson[1];
    let type = lesson[2];
    let group = lesson[3];
    let time_start = lesson[4];
    let time_end = lesson[5];
    let classroom = lesson[6];
    let day = lesson[7];
    let bg_color = lesson[8];

    //#region CREATE DIVS
    let entry_box = document.createElement('div');
    entry_box.classList.add('entry-box');
        
    let entry = document.createElement('div');
    entry.classList.add('entry');
        
    let subject_title_type_group = document.createElement('div');
    subject_title_type_group.classList.add('subject-title-type-group');
        
    let subject_title = document.createElement('div');
    subject_title.classList.add('subject-title');
    subject_title.innerHTML = title;
        
    let subject_type = document.createElement('div');
    subject_type.classList.add('subject-type');
    subject_type.innerHTML = type;

    let subject_group = null;
    if(group != null){
        subject_group = document.createElement('div');
        subject_group.classList.add('subject-group');
        subject_group.innerHTML = group;
    }
        
    let subject_time = document.createElement('div');
    subject_time.classList.add('subject-time');
    subject_time.innerHTML = `${time_start}-${time_end}`;
        
    let subject_classroom = document.createElement('div');
    subject_classroom.classList.add('subject.classroom');
    subject_classroom.innerHTML = classroom;
    //#endregion

    //#region APPEND CHILDREN
    subject_title_type_group.appendChild(subject_title);
    subject_title_type_group.appendChild(subject_type);
    if(subject_group != null){
        subject_title_type_group.appendChild(subject_group);
    }
    entry.appendChild(subject_title_type_group);
    entry.appendChild(subject_time);
    entry.appendChild(subject_classroom);
    entry_box.appendChild(entry);
        
    let entries = document.getElementById('entries');
    entries.appendChild(entry_box);
    //#endregion

    //#region CALCULATE POSITION
    let baseWidth = 20;
    let width = baseWidth / numberOfColumns;
    let left;
    switch (day) {
        case 'PON':
            left = 0;
            break;
        case 'TOR':
            left = 20;
            break;
        case 'SRE':
            left = 40;
            break;
        case 'ČET':
            left = 60;
            break;
        case 'PET':
            left = 80;
            break;
        default:
            console.log("Unknown DAY")
            break;
    }
    left += offsetXMultiplier * width;
    let top = (ConvertTime(time_start)-7) * (100/13);
    let height = ((ConvertTime(time_end)-7) - (ConvertTime(time_start)-7)) * (100/13);
    //#endregion
    
    //#region CHANGE STYLES
    entry_box.style.top = `${top}%`;
    entry_box.style.height = `${height}%`;
    entry_box.style.left = `${left}%`;
    entry_box.style.width = `${width}%`;
    entry_box.style.borderWidth = '8px';
    entry_box.style.backgroundColor = bg_color;
    //entry_box.style.opacity = 0.7;
    //#endregion

    console.log('AddLessonToTimetable: done')
}
// INPUT - 7:00,7:30,7:15 / OUTPUT - 7.00,7.50,7.25                      
function ConvertTime(time){
    const [hoursStr, minutesStr] = time.split(':');
    hours = parseInt(hoursStr, 10);
    minutes = parseInt(minutesStr, 10);
    //if(minutes == 15) minutes = 0.25;
    if(minutes == 30) minutes = 0.50;
    //if(minutes == 45) minutes = 0.75;
    timeOut = hours + minutes; // 7 - hours starts with 7:00
    return timeOut;
}

function AddSubjectSelect(){
    //#region CREATE DIVS
    let buttons = [];

    let subject_select = document.createElement('div');
    subject_select.classList.add('subject-select');
    subject_select.setAttribute('id', title) /////
        
    let subject_title_toggle = document.createElement('div');
    subject_title_toggle.classList.add('subject-title-toggle');
        
    let subject_title = document.createElement('div');
    subject_title.classList.add('subject-title');
    subject_title.innerHTML = title; /////
        
    let subject_toggle_button = document.createElement('div');
    subject_toggle_button.classList.add('subject-toggle-button');
    let buttonId = `${abbreviation}-button`;
    subject_toggle_button.setAttribute('id', buttonId);
    subject_toggle_button.innerHTML = 'X';
    buttons.push(subject_toggle_button);

    let subject_color_input = document.createElement('input');
    subject_color_input.type = 'color';
    subject_color_input.classList.add('subject-color-input');
    let inputId = `${abbreviation}-color-picker`;
    subject_color_input.setAttribute('id', inputId);
    subject_color_input.value = '#e5e5e5';
    subject_color_input.addEventListener('input', Update);

    let subject_group_toggle = document.createElement('div');
    subject_group_toggle.classList.add('subject-group-toggle');

    groupButtonNames.forEach(groupButtonName => {
        let groupButton = document.createElement('button');
        groupButton.classList.add('subject-group-toggle-button');
        let groupButtonId = `${abbreviation}-${groupButtonName}-button`
        groupButton.setAttribute('id', groupButtonId);
        groupButton.innerHTML = groupButtonName;
        buttons.push(groupButton);
    });
    buttons.forEach(button => {
        button.addEventListener('click', function(){
            ChangeActiveState(button)
        })
    });
    //#endregion
}