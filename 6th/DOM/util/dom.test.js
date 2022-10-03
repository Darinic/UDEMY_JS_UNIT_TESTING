import fs from 'fs';
import path from 'path';

import { it, vi, expect, beforeEach } from 'vitest';
import { Window } from 'happy-dom'

import {showError} from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html');
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

const window= new Window();
const document= window.document;
vi.stubGlobal('document', document);

beforeEach(() => {
    document.body.innerHTML = '';
    document.write(htmlDocumentContent);
});

it('should add an error paragraph to the id="errors" element', () => {
    showError('Test');

    const errorEl= document.getElementById('errors');
    const errorParagraphs= errorEl.firstElementChild;

    expect(errorParagraphs).not.toBeNull();
});

it('should not contain an error paragraph initially', () => {
    const errorEl= document.getElementById('errors');
    const errorParagraphs= errorEl.firstElementChild;

    expect(errorParagraphs).toBeNull();
});

it('should output the provided message in the error paragraph', () => {
    const testMessage= 'Test';

    showError(testMessage);

    const errorEl= document.getElementById('errors');
    const errorParagraphs= errorEl.firstElementChild;

    expect(errorParagraphs.textContent).toEqual(testMessage);
});