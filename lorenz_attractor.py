import numpy as np
import matplotlib.pyplot as plt
from matplotlib.animation import FuncAnimation
from mpl_toolkits.mplot3d import Axes3D   # noqa: F401  (needed for 3-D projection)
import os

# ------------------------------------------------------------------
# 1. Parameters and trajectory
# ------------------------------------------------------------------
sigma, rho, beta = 10, 28, 8 / 3
t = np.linspace(0, 100, 10_000)
dt = t[1] - t[0]
x, y, z = [0], [1], [1.05]

def lorenz(x, y, z):
    return (
        sigma * (y - x),
        x * (rho - z) - y,
        x * y - beta * z,
    )

for _ in range(len(t) - 1):
    dx, dy, dz = lorenz(x[-1], y[-1], z[-1])
    x.append(x[-1] + dx * dt)
    y.append(y[-1] + dy * dt)
    z.append(z[-1] + dz * dt)

# ------------------------------------------------------------------
# 2. Figure and axis
# ------------------------------------------------------------------
plt.rcParams['figure.facecolor'] = 'none'
plt.rcParams['axes.facecolor']   = 'none'

fig = plt.figure(figsize=(12, 6), dpi=120, facecolor='none')      # 2:1 canvas
ax  = fig.add_subplot(111, projection='3d')

ax.set_facecolor('none')
for axis in (ax.xaxis, ax.yaxis, ax.zaxis):
    axis.set_pane_color((0, 0, 0, 0))

ax.set_box_aspect([
    max(x) - min(x),               # x-extent
    max(y) - min(y),               # y-extent
    (max(z) - min(z)) * 0.50,      # compress z a bit
])

ax.set_xlim(min(x), max(x))
ax.set_ylim(min(y), max(y))
ax.set_zlim(min(z), max(z))
ax.set_axis_off()

line, = ax.plot([], [], [], lw=1.5, color='#00ff00')

def update(frame):
    line.set_data(x[:frame], y[:frame])
    line.set_3d_properties(z[:frame])
    return line,

anim = FuncAnimation(fig, update, frames=len(t), interval=20, blit=True)

# Save as GIF (transparency is limited in GIFs)
anim.save(
    "lorenz_attractor.gif",
    writer="pillow",
    fps=30,
    dpi=120,
    savefig_kwargs={
        "transparent": True,
        "facecolor": "none",
        "edgecolor": "none",
        "pad_inches": 0,
        "bbox_inches": "tight"
    }
)

# ------------------------------------------------------------------
# 3. Export transparent frames
# ------------------------------------------------------------------
output_dir = "lorenz_frames"
os.makedirs(output_dir, exist_ok=True)

for i in range(0, len(t), 10):          # adjust step for file count
    update(i)
    fig.savefig(
        f"{output_dir}/frame_{i:04d}.png",
        transparent=True,
        bbox_inches='tight',            # crop to content
        pad_inches=0                    # remove padding
    )

plt.close()