import numpy as np
import matplotlib.pyplot as plt
import math

# OBJECTIVE FUNCTION
def sphere_fun(x, y):
    return x**2 + y**2

#def sphere_fun(x,y):
#    value = 20 + (x**2 + y**2) - 10 * (np.cos(2 * np.pi * x) + np.cos(2 * np.pi * y))
#    return value

# 2D AND 3D VISUALS
def pso_2d(history, screenshots, x, y, z):
    fig, axes = plt.subplots(1, len(screenshots), figsize=(20, 5))

    for idx, step in enumerate(screenshots):
        ax = axes[idx]
        # receive particle position for the specific iteration
        X_step = history[step]

        ax.contourf(x, y, z, levels=20, cmap='viridis', alpha=0.2)
        ax.scatter(X_step[0], X_step[1], color='magenta', edgecolors='white', marker='o', s=60)
        # visual on global minimum
        ax.plot(0, 0, marker='X', color='black', markersize=12)

        ax.set_title(f"2D View - Iteration {step}")
        ax.set_xlim(-10, 10)
        ax.set_ylim(-10, 10)

    plt.tight_layout()
    plt.show()


def pso_3d(history, screenshots, x, y, z):

    fig, axes = plt.subplots(1, len(screenshots), figsize=(25, 5), subplot_kw={"projection": "3d"})
    
    for idx, step in enumerate(screenshots):
        ax = axes[idx]
        X_step = history[step]
        # calculate z heights
        current_z = sphere_fun(X_step[0], X_step[1])         

        ax.plot_surface(x, y, z, cmap='viridis', alpha=0.4, edgecolor='none')
        ax.scatter(X_step[0], X_step[1], current_z, color='magenta', edgecolors='white', s=60, depthshade=False)

        # visual on global minimum
        ax.scatter(0, 0, 0, color='red', marker='X', s=100)         
        ax.set_title(f"3D View - Iteration {step}")
        ax.set_xlim(-10, 10)
        ax.set_ylim(-10, 10)
        ax.set_zlim(0, 200)
        ax.view_init(elev=30, azim=45)
        
    plt.tight_layout()
    plt.show()


# PSO LOGIC
num_particles = 50
iterations = 40
w, c1, c2 = 0.5, 1.5, 1.5 # inertia, cognitive ad social parameters

# init randomly distributed positions and velocites 
X = np.random.uniform(-10, 10, (2, num_particles))
V = np.random.randn(2, num_particles) * 0.1

# init personal bests for each particle
pbest = X.copy()
pbest_val = sphere_fun(pbest[0], pbest[1])
#init global best in the swarm
gbest = pbest[:, pbest_val.argmin()].copy()
gbest_val = pbest_val.min()

screenshots = [0, 10, 20, 39]
# history allows snapshots of X to be stored
history = {}

for i in range(iterations):
    if i in screenshots:
        history[i] = X.copy()

    r1 = np.random.rand(2, num_particles)
    r2 = np.random.rand(2, num_particles)

    # updating direction
    V = (w * V) + (c1 * r1 * (pbest - X)) + (c2 * r2 * (gbest[:, None] - X))
    # updating location
    X = X + V

    current_val = sphere_fun(X[0], X[1])

    # updating pbest if necessary
    improved = current_val < pbest_val
    pbest[:, improved] = X[:, improved]
    pbest_val[improved] = current_val[improved]

    # updating gbest if necessary
    if pbest_val.min() < gbest_val:
        gbest = pbest[:, pbest_val.argmin()].copy()
        gbest_val = pbest_val.min()

print(f"Final Global Best Position: {gbest}")
print(f"Final Global Best Value: {gbest_val}")


# EXECUTE ALGORITHM

# creating mesh behind coordinate system, mapped to data values
x, y = np.meshgrid(np.linspace(-10, 10, 100), np.linspace(-10, 10, 100))
z = sphere_fun(x, y)

#pso_2d(history, screenshots, x, y, z)
pso_3d(history, screenshots, x, y, z)

