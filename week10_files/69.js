(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{"/m9Y":function(module,exports,e){var t=e("YEfS"),r;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},o=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},"21NG":function(module,exports,e){"use strict";var t=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=t(e("VbXa")),n=t(e("w/1P")),o=t(e("sbe7")),a=t(e("CQyo")),s=t(e("8cuT")),u=e("vpZN"),c=t(e("37kS"));e("myvE");var d=function(e){function LockedContentModal(){return e.apply(this,arguments)||this}var t;return(0,r.default)(LockedContentModal,e),LockedContentModal.prototype.render=function render(){var e=this.props.courseRootPath,t=(0,n.default)("rc-LockedContentModal","styleguide",this.props.className);return o.default.createElement("div",{className:t},o.default.createElement(a.default,{allowClose:!1,modalName:(0,c.default)("This content is locked")},o.default.createElement("h3",{className:"title"},(0,c.default)("This content is locked.")),o.default.createElement("p",null,(0,c.default)("You can access this content by enrolling in an active session of this course. To enroll or check active dates for upcoming sessions, visit the course description page.")),o.default.createElement("div",{className:"horizontal-box align-items-right wrap"},o.default.createElement("a",{href:(0,u.getCourseInfoUrl)(e)},o.default.createElement("button",{className:"primary"},(0,c.default)("View sessions"))))))},LockedContentModal}(o.default.Component);d.propTypes={className:o.default.PropTypes.string,courseRootPath:o.default.PropTypes.string};var i=(0,s.default)(d,["CourseStore"],function(e){var t;return{courseRootPath:e.CourseStore.getCourseRootPath()}});exports.default=i},"4uYx":function(module,exports,e){},YEfS:function(module,exports,e){},ijKk:function(module,exports,e){"use strict";var t=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.getReference=void 0;var r=t(e("wiyT")),n=t(e("VYij")),o=t(e("CWYE")),a=t(e("BDKN")),s=t(e("8hBQ")),u=(0,o.default)("/api/onDemandReferences.v1",{type:"rest"}),c=function hydrateResponse(e){return(0,n.default)(e.elements).each(function(t){var r=t.content["org.coursera.ondemand.reference.AssetReferenceContent"].assetId,o=(0,n.default)(e.linked["openCourseAssets.v1"]).where({id:r});o.length&&(t.content=o[0])})},d=function getReference(e,t){var n=t.referenceShortId,o=t.courseId,d=e.getStore(s.default).getCachedReference(n);if(!d){var i=(new a.default).addQueryParam("courseId",o).addQueryParam("q","shortId").addQueryParam("shortId",n).addQueryParam("fields","name,shortId,slug,content").addQueryParam("includes","assets"),l=(0,r.default)(u.get(i.toString())).then(function(t){var r=c(t);e.dispatch("LOAD_REFERENCE",r[0])});return l.done(),l}e.dispatch("LOAD_REFERENCE",d)};exports.getReference=d},myvE:function(module,exports,e){var t=e("4uYx"),r;"string"==typeof t&&(t=[[module.i,t,""]]);var n={transform:void 0},o=e("aET+")(t,n);t.locals&&(module.exports=t.locals)},"v+QE":function(module,exports,e){"use strict";var t=e("TqRt");Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var r=t(e("VbXa")),n=t(e("sbe7")),o=t(e("8cuT")),a=t(e("sQ/U")),s=t(e("JUgE")),u=e("ijKk"),c=t(e("21NG")),d=t(e("+eFp"));e("/m9Y");var i=function(e){function CourseReferencesPage(t,r){var n;return(n=e.call(this,t,r)||this).componentWillReceiveProps=function(){n.getData()},n.getData=function(){var e=n.props.courseId,t=n.context.router.params;t.reference_id&&n.waitingForReferenceId!==t.reference_id&&(n.waitingForReferenceId=t.reference_id,n.context.executeAction(u.getReference,{courseId:e,referenceShortId:t.reference_id}))},n.getData(),n}(0,r.default)(CourseReferencesPage,e);var t=CourseReferencesPage.prototype;return t.renderLockedModal=function renderLockedModal(){return n.default.createElement(d.default,{transitionName:"LockedContentModal",transitionAppear:!0,transitionEnterTimeout:500,transitionAppearTimeout:500,transitionLeaveTimeout:500},n.default.createElement(c.default,{key:"LockedContentModal"}))},t.render=function render(){var e=!a.default.isAuthenticatedUser()||!this.props.isEnrolled;if(this.props.currentReference)return n.default.createElement("section",{className:"rc-CourseReferencesPage"},e&&this.renderLockedModal(),n.default.createElement("h1",{className:"tab-headline"},n.default.createElement("span",null,this.props.currentReference.name)),n.default.createElement(s.default,{key:this.props.currentReference.id,cml:this.props.currentReference.content}));return null},CourseReferencesPage}(n.default.Component);i.propTypes={currentReference:n.default.PropTypes.shape({id:n.default.PropTypes.string.isRequired,content:n.default.PropTypes.object.isRequired,name:n.default.PropTypes.string.isRequired,shortId:n.default.PropTypes.string.isRequired}),courseId:n.default.PropTypes.string.isRequired,isEnrolled:n.default.PropTypes.bool},i.contextTypes={executeAction:n.default.PropTypes.func.isRequired,router:n.default.PropTypes.object.isRequired},i.defaultProps={currentReference:null};var l=(0,o.default)(i,["CourseStore","CourseReferencesStore","CourseMembershipStore"],function(e){var t=e.CourseStore,r=e.CourseReferencesStore,n=e.CourseMembershipStore;return{currentReference:r.getCurrentReference(),isEnrolled:n.isEnrolled(),courseId:t.getCourseId()}});exports.default=l}}]);
//# sourceMappingURL=69.2a02290d2ecd8e19a0b7.js.map