(function () {
    "use strict";

    var dragSrcEl = null;
    var rows = document.querySelectorAll(".arrangeable-element");

    function handleDragStart(e) {
        this.style.opacity = "0.4";  // source node
        dragSrcEl = this;
        e.dataTransfer.effectAllowed = "move";
    }

    function handleDragOver(e) {
        if (e.preventDefault) {
            e.preventDefault(); // Necessary. Allows us to drop.
        }
        e.dataTransfer.dropEffect = "move";
        return false;
    }

    function handleDragEnter(e) {
        this.classList.add("over");
    }

    function handleDragLeave(e) {
        this.classList.remove("over");
    }

    function handleDrop(e) {
        if (e.stopPropagation) {
            e.stopPropagation(); // stops the browser from redirecting.
        }
        dragSrcEl.style.opacity = "1";
        dragSrcEl.classList.remove("over");
        rows.forEach(function (row) {
            row.classList.remove("over");
        });
        // Don't do anything if dropping the same row we're dragging.
        if (dragSrcEl !== this) {
            // Set the source row's HTML to the HTML of the row we dropped on.
            var newEl = dragSrcEl.cloneNode(true);
            dragSrcEl.parentElement.removeChild(dragSrcEl);
            newEl.addEventListener("dragstart", handleDragStart, false);
            newEl.addEventListener("dragenter", handleDragEnter, false);
            newEl.addEventListener("dragover", handleDragOver, false);
            newEl.addEventListener("dragleave", handleDragLeave, false);
            newEl.addEventListener("drop", handleDrop, false);
            newEl.addEventListener("dragend", handleDragEnd, false);
            this.parentNode.insertBefore(newEl, this.nextSibling);
        }
        return false;
    }

    function handleDragEnd(e) {
        rows.forEach(function (row) {
            row.classList.remove("over");
        });
    }

    rows.forEach(function (row) {
        row.addEventListener("dragstart", handleDragStart, false);
        row.addEventListener("dragenter", handleDragEnter, false);
        row.addEventListener("dragover", handleDragOver, false);
        row.addEventListener("dragleave", handleDragLeave, false);
        row.addEventListener("drop", handleDrop, false);
        row.addEventListener("dragend", handleDragEnd, false);
    });
})();