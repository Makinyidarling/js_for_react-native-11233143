const { processArray, formateArray } = require('./arrayManipulation');

function createUserProfiles(problemArray, arr) {
    let profileArray = [];
    let ID = 0;

    function IdFunc() {
        return ++ID;
    }

    const processedArr = processArray(arr);
    const formattedArr = formateArray(processedArr, problemArray);

    for (let i = 0; i < formattedArr.length; i++) {
        let userProfile = {
            Id: IdFunc(),
            originalName: problemArray[i],
            modifiedName: formattedArr[i]
        };
        profileArray.push(userProfile);
    }

    return profileArray;
}

const problemArray = ["Chief", "darling", "Makinyi", "Wulimaja"];
const arr = [7, 2, 31, 4, 335];

const profiles = createUserProfiles(problemArray, arr);
console.log(profiles);

