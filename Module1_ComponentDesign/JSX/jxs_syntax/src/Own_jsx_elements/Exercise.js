import React, { Component } from "react";

const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

// Trả về 1 element chứa danh sách các Công ty theo định dạng bảng như sau:
/*
    List of companies
    | Name  |   Category    |   Start   | End
    | ...   |   .....       |   .....   | ...
*/
class Exercise1 extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

// Trả về 1 element chứa danh sách các Công ty hoạt động trong lĩnh vực 'Technology':
class Exercise2 extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

// Trả về 1 element chứa danh sách các Công ty đã ngừng hoạt động trước năm 2010:
class Exercise3 extends Component {
    render() {
        return (
            <div>

            </div>
        )
    }
}

export { Exercise1, Exercise2, Exercise3 };