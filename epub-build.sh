#!/bin/bash

# Go to the script's directory, so we can run as a .command file
cd "`dirname "$0"`"

# Default name for the book
# TODO: Perhaps allow optional argument for the name of the book?
BOOKNAME="first-draft"

# Construct full name
FULLBOOKNAME=$BOOKNAME".epub"

# Delete any old version
rm $FULLBOOKNAME

# Build the new version
zip -X $FULLBOOKNAME mimetype
zip -rg $FULLBOOKNAME META-INF -x \*.DS_Store
zip -rg $FULLBOOKNAME OEBPS -x \*.DS_Store
java -jar epubcheck-3.0b3.jar $FULLBOOKNAME
