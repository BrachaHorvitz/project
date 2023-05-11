# Command interface
class TowerCommand:
    def execute(self):
        pass


# Rectangle Tower Command
class RectangleTowerCommand(TowerCommand):
    def __init__(self, height, width):
        self.height = height
        self.width = width

    def execute(self):
        if self.height < 2:
            print("The height of a tower should be >= 2.")
        elif abs(self.width - self.height) > 5:
            area = self.height * self.width
            print(f"Area of the rectangle tower: {area}")
        else:
            scope = 2 * (self.height + self.width)
            print(f"Scope of the rectangle tower: {scope}")


# Triangle Tower Command
class TriangleTowerCommand(TowerCommand):
    def __init__(self, height, width, option):
        self.height = height
        self.width = width
        self.option = option

    def execute(self):
        if self.height < 2:
            print("The height of a tower should be >= 2.")
        elif self.option == 1:
            self.compute_scope()
        elif self.option == 2:
            self.print_triangle()

    def compute_scope(self):
        scope = self.height + 2 * self.width
        print(f"Scope of the triangle tower: {scope}")


    def print_triangle(self):
        # check if the triangle can be printed
        if self.width % 2 == 0 or self.width > self.height * 2:
            print("Triangle cannot be printed.")
        else:
            remainder = int((self.height - 2) % (self.width // 2 - 1))
            numOfRows = int((self.height - 2) / (self.width / 2 - 1))
            for i in range(1, self.width + 1, 2):
                if i == 1 or i == self.width:
                    num_spaces = (self.width - i) // 2
                    print(" " * num_spaces + "*" * i)
                else:
                    for j in range(numOfRows + remainder):
                        num_spaces = (self.width - i) // 2
                        print(" " * num_spaces + "*" * i)
                    remainder = 0



# Invoker
class TowerProgram:
    def __init__(self):
        self.commands = []

    def run(self):
        while True:
            option = int(input("Enter 1 for rectangle tower, 2 for triangle tower, or 3 to exit: "))

            if option == 1:
                height = int(input("Enter the height of the rectangle tower: "))
                width = int(input("Enter the width of the rectangle tower: "))
                command = RectangleTowerCommand(height, width)
                self.commands.append(command)
            elif option == 2:
                height = int(input("Enter the height of the triangle tower: "))
                width = int(input("Enter the width of the triangle tower: "))
                print_option = int(input("Enter 1 to compute the scope, 2 to print the triangle: "))
                command = TriangleTowerCommand(height, width, print_option)
                self.commands.append(command)
            elif option == 3:
                break

            for command in self.commands:
                command.execute()
            self.commands.clear()


# Main program
if __name__ == "__main__":
    program = TowerProgram()
    program.run()
