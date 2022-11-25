import {LinkedList, NodeCreator} from '../linked-list-project/linkedList';

const appendList = LinkedList();
const prependList = LinkedList();
const emptyList = LinkedList();
const extraCreditList = LinkedList();
const otherExtraCreditList = LinkedList();

test('linked properly', () => {
    expect(LinkedList);
});

test('linked properly', () => {
    expect(NodeCreator);
});

test('creates a Node with given value', () => {
    const Node = NodeCreator('five');
    expect(Node.getValue()).toBe('five');
});

test('can create and access a appendList through Head()', () => {
    appendList.appendValue('one');
    expect(appendList.getHead().getValue()).toBe('one');
});

test('can travel through a appendList and append values', () => {
    appendList.appendValue(2);
    appendList.appendValue(3);
    expect(appendList.getHead().getNext().getNext().getValue()).toBe(3);
});

test('adds a node to an empty list', () => {
    prependList.prependValue('two');
    expect(prependList.getHead().getValue()).toBe('two');
});

test('adds a node to an existting list and links to others', () => {
    prependList.prependValue('one');
    prependList.appendValue('three');
    expect(prependList.getHead().getValue()).toBe('one');
    expect(prependList.getHead().getNext().getValue()).toBe('two');
    expect(prependList.getHead().getNext().getNext().getValue()).toBe('three');
});

test('counts the number of nodes in a linked list', () => {
    expect(appendList.getListSize()).toBe(3);
    appendList.appendValue('four');
    expect(appendList.getListSize()).toBe(4);
});

test('returns the value in the last node of the list', () => {
    expect(appendList.getTail().getValue()).toBe('four');
});

test('returns the node value at the given index', () => {
    expect(appendList.atPosition(2).getValue()).toBe(2);
});

test('removes the last element from the list', () => {
    expect(appendList.getTail().getValue()).toBe('four');
    appendList.pop();
    expect(appendList.getTail().getValue()).toBe(3);
});

test('searches for a value and returns true if found or false if not', () => {
    expect(appendList.contains(3)).toBe(true);
    expect(appendList.contains(5)).toBe(false);
    expect(appendList.contains('one')).toBe(true);
});

test('returns the index of the node containing provided value, or null', () => {
    expect(appendList.find(3)).toBe(3);
    expect(appendList.find(5)).toBe(null);
});

test('prints the values of every node including the null value', () => {
    expect(appendList.toString()).toStrictEqual(['one', 2, 3, null]);
    expect(prependList.toString()).toStrictEqual(['one', 'two', 'three', null]);
});

test('can add a new value in the middle of a linked list', () => {
    extraCreditList.appendValue(1);
    extraCreditList.appendValue(3);
    extraCreditList.insertAt('mid', 2);
    expect(extraCreditList.atPosition(2).getValue()).toBe('mid');
});




test('all functions handle an empty list', () => {
    expect(emptyList.getListSize()).toBe(0);
    expect(emptyList.getHead()).toBe('List is empty');
    expect(emptyList.getTail()).toBe('List is empty');
    expect(emptyList.atPosition(2)).toBe('List is empty');
    expect(emptyList.pop()).toBe('List is empty');
    expect(emptyList.contains(3)).toBe('List is empty');
    expect(emptyList.find(5)).toBe('List is empty');
    expect(emptyList.toString()).toBe('List is empty');
    expect(otherExtraCreditList.insertAt(3, 3)).toBe('List was empty so appended a value.');
    expect(otherExtraCreditList.getHead().getValue()).toBe(3);
});


/* Will not be incorporating DRY programming rules here rather finishing
and moving on when im done figuring everything out, not worrying
about efficient usage but probably should have kept DRY in mind
as i was writing rather then going back over it and altering it to BECOME 
DRY, for now rather focusing on getting it to work rather then
making it pretty */

/* when i appended 'one' in prevous test they are all in a global appendList
variable, i could make individual lists for each test but just keeping
track works just as well i think for my purposes.  */