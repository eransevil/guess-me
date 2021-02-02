var gQuestsTree;
var gCurrQuest;
var gPrevQuest = null;

const KEY = 'GUESS-ME-DB';

function createQuestsTree() {
  gQuestsTree = loadFromStorage(KEY);
//   debugger;
  //|| !gQuestsTree.length
  if (!gQuestsTree ) {
    gQuestsTree = createQuest('Male?');
    gQuestsTree.yes = createQuest('Gandhi');
    gQuestsTree.no = createQuest('Rita');
}

    gCurrQuest = gQuestsTree;
    gPrevQuest = null;
}

function createQuest(txt) {
  return {
    txt: txt,
    yes: null,
    no: null,
  };
}

function isChildless(node) {
  return node.yes === null && node.no === null;
}

function moveToNextQuest(res) {
  // TODO: update the gPrevQuest, gCurrQuest global vars
  gPrevQuest = gCurrQuest;
  // console.log(gPrevQuest)
  gCurrQuest = gCurrQuest[res];
  gLastRes = res;
  // console.log(gCurrQuest)
}

function addGuess(newQuestTxt, newGuessTxt) {
  // TODO: Create and Connect the 2 Quests to the quetsions tree
  // console.log(newQuestTxt, newGuessTxt, lastRes)
  gCurrQuest.yes = createQuest(newGuessTxt);
  gCurrQuest.no = createQuest(gCurrQuest.txt);
  gCurrQuest.txt = newQuestTxt;
  console.log( 'gCurrQuest.yes =',gCurrQuest.yes, '  gCurrQuest.no = ' , gCurrQuest.no, '  gCurrQuest.txt=',gCurrQuest.txt  )
  gCurrQuest = gQuestsTree;
  console.log( '  gCurrQuest=', gCurrQuest)
  saveToStorage(KEY, gCurrQuest);
}

function getCurrQuest() {
  return gCurrQuest;
}
