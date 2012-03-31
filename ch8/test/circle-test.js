/**
 * Created by azu.
 * Date: 12/03/09 0:10
 * License: MIT License
 */
buster.testCase("Circle test", {
    "test property accessors" : function(){
        var circle = {};
        Object.defineProperty(circle, "diameter", {
            get : function(){
                return this.radius * 2;
            },
            set : function(diameter){
                if (isNaN(diameter)){
                    throw new TypeError("Diameter should be a number");
                }
                this.radius = diameter / 2;
            }
        });

        circle.radius = 4;
        assert.equals(8, circle.diameter);

        circle.diameter = 3;
        assert.equals(3, circle.diameter);
        assert.equals(1.5, circle.radius);
        assert.exception(function(){
            circle.diameter = {};
        });
    },
    "test Object.create backed constructor":function(){
        var circle = new Circle(3);
        assert(circle instanceof Circle);
        assert.equals(6, circle.diameter);
        circle.radius = 6;
        assert.equals(12, circle.diameter);
        delete circle.radius;
        assert.equals(6, circle.radius);

    }
});
