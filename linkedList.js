export{LinkedList};



const LinkedList = () => {

    let Head = null;
    
    const appendValue = (value) => {
     const newNode = NodeCreator(value); 
     newNode.setValue(value);
     console.log(newNode.getValue())
    
     if( Head === null) {
      return (Head = newNode);
     }
    
    let listItem = Head;
    
     while(listItem.getNext() !== null) {
      listItem = listItem.getNext();
     }
     listItem.setNext(newNode);
    }
    
    const getHead = () => Head;
    return{appendValue,getHead}
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
    far.appendValue('one');
    far.appendValue('two');
    far.appendValue(3);
    
    const ofar = LinkedList();
    const one = NodeCreator();
    const two = NodeCreator(12);