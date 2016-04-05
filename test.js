/**
 * Created by lonecry on 2016.4.4.
 */



self.onmessage = function (e){
    var sum = e.data.first + e.data.second;
    self.postMessage(sum);
};