angular.module('projeto').directive('uiAlert', function(){
    return{
        template: `
        <div class="ui-alert">
            <div class="ui-alert-title">
                {{title}}
            </div>
            <div class="ui-alert-message">
                {{error}}
            </div>
        </div>
        `,
        replace:true,
        scope:{
            title:'@',
            error:'@'
        }
    }
})