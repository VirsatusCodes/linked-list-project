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

    let listItem = Head;
    let counter = 1;
      
      if (Head === null) {
        return 0;
      }

      while(listItem.getNext() !== null) {
        counter++;
        listItem = listItem.getNext();
       };

       return counter;
    }

    const getTail = () => {
      let listItem = Head;

      if(Head === null ) {
        return 'List is empty'
       }

      while(listItem.getNext() !== null) {
        listItem = listItem.getNext();
       };
       return listItem;
    }

    const atPosition = (value) => {
      let listItem = Head;
      let counter = value;

      if (Head === null) {
        return 'List is empty'
      }

      while(counter > 1) {
        counter--;
        listItem = listItem.getNext();
      }
      return listItem
    }

    const pop = () => {
      let popTarget = atPosition(getListSize() - 1)

      if (Head === null) {
        return 'List is empty'
      }
      popTarget.setNext(null);
    }

    const contains = (value) => {
      let listItem = Head;
      let counter = getListSize();

      if (Head === null) {
        return 'List is empty'
      }
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
      let listItem = Head;
      let counter = 0;

      if(Head === null ) {
        return 'List is empty'
       }
       while(counter < getListSize()) {
        counter++;
        if (listItem.getValue() === value) {
          return counter
        }
        listItem = listItem.getNext();
      }
      return null
  }

    
    const getHead = () => {
     if(Head === null ) {
      return 'List is empty'
     }
     return Head
    };
    return{appendValue,getHead, prependValue, getListSize, getTail, atPosition
    , pop, contains, find}
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
    
    
    const far = LinkedList();
/*     far.appendValue('one');
    far.appendValue('two');
    far.appendValue(3); */
    
    const ofar = LinkedList();
    const one = NodeCreator();
    const two = NodeCreator(12);