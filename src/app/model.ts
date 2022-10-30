export interface Person {
    id: string;
    nick: string;
}

export interface Bookmark {
    id: string;
    url: string;
    title: string;
    description: string;
    creator: string;
}

export interface Tag {
    id: string;
    label: string;
}

/*
@prefix w: <http://hyperdata.it/wiki/> .
@prefix tag: <http://hyperdata.it/tags/> .
@prefix rdfs: <http://www.w3.org/2000/01/rdf-schema#> .
@prefix dc: <http://purl.org/dc/terms/> .
@prefix foaf: <http://xmlns.com/foaf/0.1/> .
<http:\_\_test> a w:Bookmark ;
w:url <http://test> ;
dc:title "the title";
dc:description """some description""";

dc:creator <http:\_\_danja> ;
dc:topic tag:tag1 ;
dc:topic tag:tag2 ;
dc:topic tag:tag3 ;
dc:created "2018-07-24T12:16:57Z" .

tag:tag1 rdfs:label "tag1".
tag:tag2 rdfs:label "tag2".
tag:tag3 rdfs:label "tag3".

<http:\_\_danja> a foaf:Person ;
foaf:nick "danja" .
*/