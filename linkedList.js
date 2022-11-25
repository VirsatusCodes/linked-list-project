export{LinkedList, NodeCreator};



const LinkedList = () => {

    let Head = null;
    
    const appendValue = (value) => {

     const newNode = NodeCreator(value); 
     newNode.setValue(value);
    
     if( Head === null) {
      return (Head = newNode);
     }
    
    let listItem = Head;
    
     while(listItem.getNext() !== null) {
      listItem = listItem.getNext();
     }
     listItem.setNext(newNode);
    }

    const prependValue = (value) => {

      const newNode = NodeCreator(value);
      newNode.setValue(value);

      if( Head === null) {
        return (Head = newNode);
       }
      let prevHead = Head;

       Head = newNode;
       Head.setNext(prevHead);
    }
    
    const getListSize = () => {
      if (Head === null) {
        return 0;
      }

    let listItem = Head;
    let counter = 1;
      

      while(listItem.getNext() !== null) {
        counter++;
        listItem = listItem.getNext();
       };

       return counter;
    }

    const getTail = () => {
      if(Head === null ) {
        return 'List is empty'
       }
      let listItem = Head;


      while(listItem.getNext() !== null) {
        listItem = listItem.getNext();
       };
       return listItem;
    }

    const atPosition = (value) => {
      if (Head === null) {
        return 'List is empty'
      }
      let listItem = Head;
      let counter = value;


      while(counter > 1) {
        counter--;
        listItem = listItem.getNext();
      }
      return listItem
    }
    /* this uses the head of the list being index 1 */

    const pop = () => {
      if (Head === null) {
        return 'List is empty'
      }
      let popTarget = atPosition(getListSize() - 1)

      popTarget.setNext(null);
    }
    /* does this work on a list length of 1? also need to set Head to null if
    list is only 1 length and i pop it out actually if list is
    length one it would be as simple as setting Head to null */
    
    /* this removes from the list but does not delete the node */

    const contains = (value) => {
      if (Head === null) {
        return 'List is empty'
      }
      let listItem = Head;
      let counter = getListSize();

      while(counter > 0) {
        counter--;
        if (listItem.getValue() === value) {
          return true
        }

        listItem = listItem.getNext();
      }
        return false
    }

    const find = (value) => {
      if(Head === null ) {
        return 'List is empty'
       }
      let listItem = Head;
      let counter = 0;

       while(counter < getListSize()) {
        counter++;
        if (listItem.getValue() === value) {
          return counter
        }
        listItem = listItem.getNext();
      }
      return null
  }

  const toString = () => {
    if(Head === null ) {
      return 'List is empty'
     }

    let nodeValues = [];
    let listItem = Head;
    let counter = 0;

     while(counter < getListSize()) {
      counter++;
      nodeValues.push(listItem.getValue());
      listItem = listItem.getNext();
  }
  nodeValues.push(null);
  return nodeValues
}

  const insertAt = (value, index) => {
    if(Head === null ) {
      appendValue(value);
      return 'List was empty so appended a value.'
     }

     const newNode = NodeCreator(value);
     newNode.setValue(value);

     let pointerToPreviousIndexLocation = atPosition(index).getNext();
     let nodeValueBehindNewNode = atPosition(index-1);

     newNode.setNext(pointerToPreviousIndexLocation);
     nodeValueBehindNewNode.setNext(newNode);
  }

    
    const getHead = () => {
     if(Head === null ) {
      return 'List is empty'
     }
     return Head
    };
    return{appendValue,getHead, prependValue, getListSize, getTail, atPosition
    , pop, contains, find, toString, insertAt}
    }
    
    const NodeCreator = (inp) => {
      let value = inp || null;
      let next = null;
      const getValue = () => value;
      const getNext = () => next;
      const setValue = (inp) => value = inp;
      const setNext = (inp) => next = inp;
      return {getValue, getNext, setValue, setNext}
    }
    /* Will not be incorporating DRY programming rules here rather finishing
and moving on when im done figuring everything out, not worrying
about efficient usage but probably should have kept DRY in mind
as i was writing rather then going back over it and altering it to BECOME 
DRY, for now rather focusing on getting it to work rather then
making it pretty */

/* rather then doing the last extra credit which is very straightforward
once you are done with insert version and the pop i will be moving on,
it was a very fun informative excersize and i learned alot!
code could be cleaner in a lot of spaces but im eager to move forward*/