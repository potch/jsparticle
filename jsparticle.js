smoke = {
    method: 'css',
    num: 50,
    shape: 'circle',
    lifetime: [40,50],
    behavior: 'burst',
    origin: [400,400],

    x: {
        start: 0,
        vel_init: [-.5, .5],
        init: function() {
            this.amp = rand([4,6]);
            this.freq = rand([4,6]);
        },
        frame: function(t) {
            return x + this.amp * t * Math.sin(t  * this.freq * PI);
        }
    },
    
    y: {
        start: 0,
        end: [-30,-40]
    }
    
    size: {
        start: 2,
        end: 15,
        ease: 'easein'
    },
    
    color: {
        start: 'rgba(255,255,255,1)',
        end: 'rgba(192,192,192,.1)',
        ease: 'easein'
    }
}

function rand(range) {
    
}

function ParticleEffect(_cfg) {
    
}

function Particle(_cfg) {
    this.x = _cfg.x
    this.vel
}