<ul class="nav nav-tabs" id="myTab">
    <li role="presentation" ng-repeat="tab in tabs" class="{{ active == tab.id ? 'active' : '' }}"  id="{{tab.id}}" data-num="{{tab.num}}">
        <a href="{{tab.url}}">{{tab.title}}</a>
    </li>
</ul>
<div class="tab-content">
    <div role="tabpanel" class="tab-pane fade in active" id="home">{{detail.text}}</div>
</div>